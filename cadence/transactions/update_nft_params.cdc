import "NonFungibleToken"
import "MessageCard"

transaction(
    id: UInt64,
    newParams: {String: AnyStruct}
) {
    prepare(signer: auth(BorrowValue) &Account) {
        let collectionRef = signer.storage.borrow<auth(MessageCard.UpdateParams) &MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.updateParams(id: id, params: newParams)
    }
}
