import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MetadataViews from "../contracts/core/MetadataViews.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

transaction {
    prepare(signer: AuthAccount) {
        if signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) != nil {
            return
        }
        signer.save(<- MessageCard.createEmptyCollection(), to: MessageCard.CollectionStoragePath)
        signer.link<&MessageCard.Collection{NonFungibleToken.CollectionPublic, MessageCard.CollectionPublic, MetadataViews.ResolverCollection}>(
            MessageCard.CollectionPublicPath,
            target: MessageCard.CollectionStoragePath
        )
    }
}
