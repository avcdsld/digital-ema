import "NonFungibleToken"
import "MetadataViews"
import "MessageCard"
import "EmaShowcase"

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
}
