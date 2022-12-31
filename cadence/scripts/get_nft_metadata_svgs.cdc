import MetadataViews from "../contracts/core/MetadataViews.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

pub fun main(address: Address): [String] {
    var res: [String] = []
    let collection = getAccount(address)
        .getCapability(MessageCard.CollectionPublicPath)
        .borrow<&{MessageCard.CollectionPublic}>()
    if collection != nil {
        let ids = collection!.getIDs()
        for id in ids {
            let nft = collection!.borrowMessageCard(id: id)!
            let traits = (nft.resolveView(Type<MetadataViews.Traits>())!) as! MetadataViews.Traits
            let svg = traits.traits[1].value as! String
            res.append(svg)
        }
        return res
    }
    return res
}
