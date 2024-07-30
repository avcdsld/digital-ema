import "MetadataViews"
import "MessageCard"

access(all) struct NFT {
    access(all) let display: MetadataViews.Display
    access(all) let traits: MetadataViews.Traits

    init(
        display: MetadataViews.Display,
        traits: MetadataViews.Traits,
    ) {
        self.display = display
        self.traits = traits
    }
}

access(all) fun main(address: Address, id: UInt64): NFT {
    let collection = getAccount(address)
        .capabilities.get<&MessageCard.Collection>(MessageCard.CollectionPublicPath)
        .borrow()
        ?? panic("Not Found")

    let nft = collection.borrowMessageCard(id)!
    let display = nft.resolveView(Type<MetadataViews.Display>())!
    let traits = nft.resolveView(Type<MetadataViews.Traits>())!

    return NFT(
        display: display as! MetadataViews.Display,
        traits: traits as! MetadataViews.Traits,
    )
}
