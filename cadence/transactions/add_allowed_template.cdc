import "NonFungibleToken"
import "EmaShowcase"

transaction(templateId: UInt64) {
    prepare(signer: auth(BorrowValue) &Account) {
        let adminRef = signer.storage.borrow<&EmaShowcase.Admin>(from: /storage/EmaShowcaseAdmin) ?? panic("Not Found")
        adminRef.addAllowedTemplateId(templateId: templateId)
    }
}
