import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

pub fun main(address: Address): Int {
    let collectionRef = getAccount(address)
        .getCapability(MessageCard.CollectionPublicPath)
        .borrow<&{NonFungibleToken.CollectionPublic}>()
        ?? panic("Not Found")
    return collectionRef.getIDs().length
}
