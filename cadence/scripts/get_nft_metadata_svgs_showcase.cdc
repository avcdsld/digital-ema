import MetadataViews from "../contracts/core/MetadataViews.cdc"
import MessageCard from "../contracts/MessageCard.cdc"
import EmaShowcase from "../contracts/EmaShowcase.cdc"

pub fun main(from: Int, upTo: Int): [String] {
    var res: [String] = []

    let emas = EmaShowcase.getEmas(from: from, upTo: upTo)
    for ema in emas {
        let collection = getAccount(ema.owner)
            .getCapability(MessageCard.CollectionPublicPath)
            .borrow<&{MessageCard.CollectionPublic}>()
        
        if collection != nil {
            let nft = collection!.borrowMessageCard(id: ema.id)!
            let traits = (nft.resolveView(Type<MetadataViews.Traits>())!) as! MetadataViews.Traits
            let svg = traits.traits[1].value as! String
            res.append(svg)
        }
    }
    return res
}
