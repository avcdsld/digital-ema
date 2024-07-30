import "NonFungibleToken"
import "MessageCard"

access(all) fun main(address: Address): Int {
    let collectionRef = getAccount(address)
        .capabilities.get<&{NonFungibleToken.CollectionPublic}>(MessageCard.CollectionPublicPath)
        .borrow()
        ?? panic("Not Found")
    return collectionRef.getIDs().length
}
