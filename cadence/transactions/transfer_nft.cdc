import "NonFungibleToken"
import "MessageCard"

transaction(recipient: Address, withdrawID: UInt64) {
    prepare(signer: auth(BorrowValue, GetStorageCapabilityController) &Account) {
        let recipient = getAccount(recipient)
        let collectionRef = signer.storage.borrow<auth(NonFungibleToken.Withdraw) &MessageCard.Collection>(from: MessageCard.CollectionStoragePath) ?? panic("Not Found")
        let depositRef = recipient.capabilities.get<&{NonFungibleToken.Collection}>(MessageCard.CollectionPublicPath).borrow() ?? panic("Not Found")
        let nft <- collectionRef.withdraw(withdrawID: withdrawID)
        depositRef.deposit(token: <-nft)
    }
}
