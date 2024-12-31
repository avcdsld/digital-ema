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
