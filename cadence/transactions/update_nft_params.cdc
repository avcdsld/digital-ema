import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

transaction(
    id: UInt64,
    newParams: {String: AnyStruct}
) {
    prepare(signer: AuthAccount) {
        let collectionRef = signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.updateParams(id: id, params: newParams)
    }
}
