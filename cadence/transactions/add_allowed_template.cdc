import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import EmaShowcase from "../contracts/EmaShowcase.cdc"

transaction(templateId: UInt64) {
    prepare(signer: AuthAccount) {
        let adminRef = signer.borrow<&EmaShowcase.Admin>(from: /storage/EmaShowcaseAdmin) ?? panic("Not Found")
        adminRef.addAllowedTemplateId(templateId: templateId)
    }
}
