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
        let collectionRef = signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        let collectionCapability = signer.getCapability<&MessageCard.Collection{MessageCard.CollectionPublic}>(MessageCard.CollectionPublicPath)
        
        var i = 0
        while i < 100 {
            i =  i + 1

            let nft <- MessageCard.mint(params: params, templatesCapability: templatesCapability, templateId: templateId)
            let id = nft.id
            collectionRef.deposit(token: <- nft)
            EmaShowcase.addEma(id: id, collectionCapability: collectionCapability)
        }
    }
}
