## Cadence 1.0 Migration 2024/07/30

```sh
sudo sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"
flow-c1 version

flow-c1 emulator
flow-c1 deploy


flow-c1 migrate stage MessageCard --network=testnet
flow-c1 migrate is-staged MessageCard --network=testnet
flow-c1 migrate is-validated MessageCard --network=testnet

flow-c1 migrate stage MessageCardRenderers --network=testnet
flow-c1 migrate is-staged MessageCardRenderers --network=testnet
flow-c1 migrate is-validated MessageCardRenderers --network=testnet

flow-c1 migrate stage EmaShowcase --network=testnet
flow-c1 migrate is-staged EmaShowcase --network=testnet
flow-c1 migrate is-validated EmaShowcase --network=testnet


flow-c1 migrate stage MessageCard --network=mainnet
flow-c1 migrate is-staged MessageCard --network=mainnet
flow-c1 migrate is-validated MessageCard --network=mainnet

flow-c1 migrate stage MessageCardRenderers --network=mainnet
flow-c1 migrate is-staged MessageCardRenderers --network=mainnet
flow-c1 migrate is-validated MessageCardRenderers --network=mainnet

flow-c1 migrate stage EmaShowcase --network=mainnet
flow-c1 migrate is-staged EmaShowcase --network=mainnet
flow-c1 migrate is-validated EmaShowcase --network=mainnet
```
