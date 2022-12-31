import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MetadataViews from "../contracts/core/MetadataViews.cdc"
import MessageCard from "../contracts/MessageCard.cdc"
import EmaShowcase from "../contracts/EmaShowcase.cdc"

transaction(
    params: {String: AnyStruct},
    templateCreator: Address,
    templateId: UInt64
) {
    prepare(signer: AuthAccount) {
        if signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) == nil {
            signer.save(<- MessageCard.createEmptyCollection(), to: MessageCard.CollectionStoragePath)
            signer.link<&MessageCard.Collection{NonFungibleToken.CollectionPublic, MessageCard.CollectionPublic, MetadataViews.ResolverCollection}>(
                MessageCard.CollectionPublicPath,
                target: MessageCard.CollectionStoragePath
            )
        }

        let templatesCapability = getAccount(templateCreator).getCapability<&MessageCard.Templates{MessageCard.TemplatesPublic}>(MessageCard.TemplatesPublicPath)
        let nft <- MessageCard.mint(params: params, templatesCapability: templatesCapability, templateId: templateId)
        let id = nft.id
        let collectionRef = signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.deposit(token: <- nft)

        let collectionCapability = signer.getCapability<&MessageCard.Collection{MessageCard.CollectionPublic}>(MessageCard.CollectionPublicPath)
        EmaShowcase.addEma(id: id, collectionCapability: collectionCapability)
    }
}
