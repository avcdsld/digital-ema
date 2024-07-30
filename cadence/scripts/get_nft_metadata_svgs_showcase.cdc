import "MetadataViews"
import "MessageCard"
import "EmaShowcase"

access(all) fun main(from: Int, upTo: Int): [String] {
    var res: [String] = []

    let emas = EmaShowcase.getEmas(from: from, upTo: upTo)
    for ema in emas {
        let collection = getAccount(ema.owner)
            .capabilities.get<&MessageCard.Collection>(MessageCard.CollectionPublicPath)
            .borrow()
        
        if collection != nil {
            let nft = collection!.borrowMessageCard(ema.id)!
            let traits = (nft.resolveView(Type<MetadataViews.Traits>())!) as! MetadataViews.Traits
            let svg = traits.traits[1].value as! String
            res.append(svg)
        }
    }
    return res
}
