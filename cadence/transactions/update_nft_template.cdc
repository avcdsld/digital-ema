import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

transaction(
    id: UInt64,
    newTemplateCreator: Address,
    newTemplateId: UInt64
) {
    prepare(signer: AuthAccount) {
        let templatesCapability = getAccount(newTemplateCreator).getCapability<&MessageCard.Templates{MessageCard.TemplatesPublic}>(MessageCard.TemplatesPublicPath)
        let collectionRef = signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.updateTemplate(
            id: id,
            templatesCapability: templatesCapability,
            templateId: newTemplateId
        )
    }
}
