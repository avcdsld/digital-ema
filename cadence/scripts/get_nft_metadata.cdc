import MetadataViews from "../contracts/core/MetadataViews.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

pub struct NFT {
    pub let display: MetadataViews.Display
    pub let traits: MetadataViews.Traits

    init(
        display: MetadataViews.Display,
        traits: MetadataViews.Traits,
    ) {
        self.display = display
        self.traits = traits
    }
}

pub fun main(address: Address, id: UInt64): NFT {
    let collection = getAccount(address)
        .getCapability(MessageCard.CollectionPublicPath)
        .borrow<&{MessageCard.CollectionPublic}>()
        ?? panic("Not Found")

    let nft = collection.borrowMessageCard(id: id)!
    let display = nft.resolveView(Type<MetadataViews.Display>())!
    let traits = nft.resolveView(Type<MetadataViews.Traits>())!

    return NFT(
        display: display as! MetadataViews.Display,
        traits: traits as! MetadataViews.Traits,
    )
}
