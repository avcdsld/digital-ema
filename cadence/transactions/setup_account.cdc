import "NonFungibleToken"
import "MetadataViews"
import "MessageCard"

transaction {
    prepare(signer: auth(BorrowValue, SaveValue, IssueStorageCapabilityController, PublishCapability) &Account) {
        if signer.storage.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) != nil {
            return
        }
        signer.storage.save(<- MessageCard.createEmptyCollection(nftType: Type<@MessageCard.NFT>()), to: MessageCard.CollectionStoragePath)
        let cap: Capability = signer.capabilities.storage.issue<&MessageCard.Collection>(MessageCard.CollectionStoragePath)
        signer.capabilities.publish(cap, at: MessageCard.CollectionPublicPath)
    }
}
