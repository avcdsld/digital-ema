import "NonFungibleToken"
import "MessageCard"

access(all) fun main(address: Address): Int {
    let templatesRef = getAccount(address)
        .capabilities.get<&MessageCard.Templates>(MessageCard.TemplatesPublicPath)
        .borrow()
        ?? panic("Not Found")
    return templatesRef.getIDs().length
}
