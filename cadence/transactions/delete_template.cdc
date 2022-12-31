import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"
import MessageCardRenderers from "../contracts/MessageCardRenderers.cdc"

transaction(templateId: UInt64) {
    prepare(signer: AuthAccount) {
        let templatesRef = signer.borrow<&MessageCard.Templates>(from: MessageCard.TemplatesStoragePath) ?? panic("Not Found")
        templatesRef.deleteTemplate(templateId: templateId)
    }
}
