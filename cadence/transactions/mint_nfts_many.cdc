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
        let collectionRef = signer.storage.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        let collectionCapability = signer.capabilities.get<&MessageCard.Collection>(MessageCard.CollectionPublicPath)
        
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
