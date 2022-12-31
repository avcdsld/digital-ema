import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import MessageCard from "../contracts/MessageCard.cdc"

transaction(recipient: Address, withdrawID: UInt64) {
    prepare(signer: AuthAccount) {
        let recipient = getAccount(recipient)
        let collectionRef = signer.borrow<&MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        let depositRef = recipient.getCapability(MessageCard.CollectionPublicPath) .borrow<&{NonFungibleToken.CollectionPublic}>() ?? panic("Not Found")
        let nft <- collectionRef.withdraw(withdrawID: withdrawID)
        depositRef.deposit(token: <-nft)
    }
}
