import "NonFungibleToken"
import "MessageCard"

transaction(
    id: UInt64,
    newTemplateCreator: Address,
    newTemplateId: UInt64
) {
    prepare(signer: auth(BorrowValue, GetStorageCapabilityController) &Account) {
        let templatesCapability = getAccount(newTemplateCreator).capabilities.get<&MessageCard.Templates>(MessageCard.TemplatesPublicPath)
        let collectionRef = signer.storage.borrow<auth(MessageCard.UpdateTemplate) &MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.updateTemplate(
            id: id,
            templatesCapability: templatesCapability,
            templateId: newTemplateId
        )
    }
}
