import * as fcl from "@onflow/fcl";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

const network = process.env.NEXT_PUBLIC_FLOW_NETWORK || 'mainnet';
const nonFungibleTokenAddress = network === "mainnet" ? "0x1d7e57aa55817448" : "0x631e88ae7f1d7c20";
const nftAddress = network === "mainnet" ? "0xf38fadaba79009cc" : "0x26469acda7819263";
const showcaseAddress = network === "mainnet" ? "0x67fb6951287a2908" : "0x26469acda7819263";
const templateCreatorAddress = network === "mainnet" ? "0x67fb6951287a2908" : "0x26469acda7819263";

// 管理者アカウントの署名関数
const adminAuthz = (account) => {
  const adminAddress = process.env.FLOW_ADMIN_ADDRESS;
  const adminPrivateKey = process.env.FLOW_ADMIN_PRIVATE_KEY;
  const adminKeyIndex = parseInt(process.env.FLOW_ADMIN_KEY_INDEX || "0");
  // FLOW_ADMIN_SIG_ALGO: "ECDSA_P256" or "ECDSA_secp256k1" (default: ECDSA_secp256k1)
  const sigAlgo = process.env.FLOW_ADMIN_SIG_ALGO || "ECDSA_secp256k1";

  return {
    ...account,
    tempId: `${adminAddress}-${adminKeyIndex}`,
    addr: fcl.sansPrefix(adminAddress),
    keyId: adminKeyIndex,
    signingFunction: async (signable) => {
      const { SHA3 } = await import("sha3");
      const EC = (await import("elliptic")).default.ec;

      // 署名アルゴリズムに応じた楕円曲線を選択
      const curveName = sigAlgo === "ECDSA_P256" ? "p256" : "secp256k1";
      const ec = new EC(curveName);

      const key = ec.keyFromPrivate(Buffer.from(adminPrivateKey, "hex"));
      const sha = new SHA3(256);
      sha.update(Buffer.from(signable.message, "hex"));
      const digest = sha.digest();
      const sig = key.sign(digest);
      const n = 32;
      const r = sig.r.toArrayLike(Buffer, "be", n);
      const s = sig.s.toArrayLike(Buffer, "be", n);
      return {
        addr: fcl.withPrefix(adminAddress),
        keyId: adminKeyIndex,
        signature: Buffer.concat([r, s]).toString("hex"),
      };
    },
  };
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // セッションチェック
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { templateName, params, googleIdHash } = req.body;

  if (!templateName || !params || !googleIdHash) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // googleIdHashをparamsに追加
  const paramsWithHash = {
    ...params,
    googleIdHash,
  };

  try {
    fcl.config({
      "accessNode.api": network === "mainnet"
        ? "https://rest-mainnet.onflow.org"
        : "https://rest-testnet.onflow.org",
      "fcl.network": network,
    });

    const templateNameToId = network === "mainnet" ? {
      horse: '9',
      fuji: '10',
      origami: '11',
      flower: '12',
      dappy: '13',
    } : {
      horse: '11',
      fuji: '12',
      origami: '13',
      flower: '14',
      dappy: '15',
    };

    const isSealed = false;
    const blockResponse = await fcl.send([fcl.getBlock(isSealed)]);
    const block = await fcl.decode(blockResponse);

    const txCode = `\
import NonFungibleToken from ${nonFungibleTokenAddress}
import MetadataViews from ${nonFungibleTokenAddress}
import MessageCard from ${nftAddress}
import EmaShowcase from ${showcaseAddress}

transaction(
    params: {String: AnyStruct},
    templateCreator: Address,
    templateId: UInt64
) {
    prepare(signer: auth(BorrowValue, SaveValue, IssueStorageCapabilityController, PublishCapability) &Account) {
        if signer.storage.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) == nil {
            signer.storage.save(<- MessageCard.createEmptyCollection(nftType: Type<@MessageCard.NFT>()), to: MessageCard.CollectionStoragePath)
            let cap: Capability = signer.capabilities.storage.issue<&MessageCard.Collection>(MessageCard.CollectionStoragePath)
            signer.capabilities.publish(cap, at: MessageCard.CollectionPublicPath)
        }

        let templatesCapability = getAccount(templateCreator).capabilities.get<&MessageCard.Templates>(MessageCard.TemplatesPublicPath)
        let nft <- MessageCard.mint(params: params, templatesCapability: templatesCapability, templateId: templateId)
        let id = nft.id
        let collectionRef = signer.storage.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.deposit(token: <- nft)

        let collectionCapability = signer.capabilities.get<&MessageCard.Collection>(MessageCard.CollectionPublicPath)
        EmaShowcase.addEma(id: id, collectionCapability: collectionCapability)
    }
}`;

    const dictionaryEntries = Object.entries(paramsWithHash).map(([key, value]) => ({
      key: '$' + key,
      value: String(value)
    }));

    const fclArgs = fcl.args([
      fcl.arg(dictionaryEntries, fcl.t.Dictionary(dictionaryEntries.map(() => ({
        key: fcl.t.String,
        value: fcl.t.String
      })))),
      fcl.arg(templateCreatorAddress, fcl.t.Address),
      fcl.arg(templateNameToId[templateName], fcl.t.UInt64),
    ]);

    const txResult = await fcl.send([
      fcl.transaction(txCode),
      fclArgs,
      fcl.proposer(adminAuthz),
      fcl.authorizations([adminAuthz]),
      fcl.payer(adminAuthz),
      fcl.limit(9999),
      fcl.ref(block.id),
    ]);

    res.status(200).json({
      transactionId: txResult.transactionId,
      success: true
    });
  } catch (error) {
    console.error("Mint error:", error);
    res.status(500).json({ error: error.message });
  }
}
