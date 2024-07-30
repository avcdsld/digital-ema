import "MetadataViews"
import "MessageCard"

access(all) fun main(address: Address): [String] {
    var res: [String] = []
    let collection = getAccount(address)
        .capabilities.get<&MessageCard.Collection>(MessageCard.CollectionPublicPath)
        .borrow()
    if collection != nil {
        let ids = collection!.getIDs()
        for id in ids {
            let nft = collection!.borrowMessageCard(id)!
            let traits = (nft.resolveView(Type<MetadataViews.Traits>())!) as! MetadataViews.Traits
            let svg = traits.traits[1].value as! String
            res.append(svg)
        }
        return res
    }
    return res
}
