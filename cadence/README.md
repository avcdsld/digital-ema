## Cadence 1.0 Migration 2024/07/30

```sh
sudo sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"
flow version

flow emulator
flow deploy


flow migrate stage MessageCard --network=testnet
flow migrate is-staged MessageCard --network=testnet
flow migrate is-validated MessageCard --network=testnet

flow migrate stage MessageCardRenderers --network=testnet
flow migrate is-staged MessageCardRenderers --network=testnet
flow migrate is-validated MessageCardRenderers --network=testnet

flow migrate stage EmaShowcase --network=testnet
flow migrate is-staged EmaShowcase --network=testnet
flow migrate is-validated EmaShowcase --network=testnet


flow migrate stage MessageCard --network=mainnet
flow migrate is-staged MessageCard --network=mainnet
flow migrate is-validated MessageCard --network=mainnet

flow migrate stage MessageCardRenderers --network=mainnet
flow migrate is-staged MessageCardRenderers --network=mainnet
flow migrate is-validated MessageCardRenderers --network=mainnet

flow migrate stage EmaShowcase --network=mainnet
flow migrate is-staged EmaShowcase --network=mainnet
flow migrate is-validated EmaShowcase --network=mainnet
```


## How to Add New Template

```sh
flow transactions send ./transactions/create_template_snake.cdc --network testnet --signer testnet-account
flow transactions send ./transactions/add_allowed_template.cdc 6 --network testnet --signer testnet-account

flow transactions send ./transactions/create_template_snake.cdc --network mainnet --signer mainnet-account
# 間違えて id:6 と id:7 の 2 つ登録してしまった
flow transactions send ./transactions/add_allowed_template.cdc 6 --network mainnet --signer mainnet-account2

```