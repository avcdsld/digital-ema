import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

pub fun main(address: Address): Int {
    let templatesRef = getAccount(address)
        .getCapability(MessageCard.TemplatesPublicPath)
        .borrow<&{MessageCard.TemplatesPublic}>()
        ?? panic("Not Found")
    return templatesRef.getIDs().length
}
