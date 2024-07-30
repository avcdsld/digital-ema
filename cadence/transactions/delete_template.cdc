import "NonFungibleToken"
import "MessageCard"
import "MessageCardRenderers"

transaction(templateId: UInt64) {
    prepare(signer: auth(BorrowValue) &Account) {
        let templatesRef = signer.storage.borrow<auth(MessageCard.DeleteTemplate) &MessageCard.Templates>(from: MessageCard.TemplatesStoragePath) ?? panic("Not Found")
        templatesRef.deleteTemplate(templateId: templateId)
    }
}
