# Digital Ema on Flow Blockchain

## ❓ What's this?

- Dapp for creating a digital ema (wooden board with New Year's wishes) using the Flow blockchain.
- Open source resources that exemplify Cadence and Flow Dapp.

## ⛩ Website

- https://digital-ema.vercel.app/en
- https://digital-ema.vercel.app/ja

## 🔎 Project Overview

### Frontend (Static Website) [./src](./src)

The front end is built by Next.js, which uses FCL (Flow Client Library) to interact with wallets and smart contracts; there is no back-end API.

### Smart Contracts ([./cadence](./cadence/))

I designed and implemented a generic contracts to create digital message cards.

- MessageCard.cdc
    - The main contract for creating message card templates and messages.
    - Mainnet: https://flowscan.org/contract/A.f38fadaba79009cc.MessageCard/overview

- MessageCardRenderers.cdc
    - This is the implementation of the renderer created to make the template for this ema. Users can also create their own renderer.
    - Mainnet: https://flowscan.org/contract/A.f38fadaba79009cc.MessageCardRenderers/overview

- EmaShowcase.cdc
    - A contract made so that you can get a list of everyone's emas. It is independent from the MessageCard as a separate contract.
    - Mainnet: https://flowscan.org/contract/A.67fb6951287a2908.EmaShowcase/overview

## 📷 Screenshots

<img width="1208" alt="ScreenShot 2023-01-01 11 49 29" src="https://user-images.githubusercontent.com/10495516/210331662-41e78543-d11f-4650-8e72-59c8efe1612e.png">

<img width="927" alt="ScreenShot 2023-01-01 12 27 05" src="https://user-images.githubusercontent.com/10495516/210331688-1aab1e88-7183-4933-81a0-0053f0e206a2.png">

<img width="1419" alt="ScreenShot 2023-01-03 19 00 51" src="https://user-images.githubusercontent.com/10495516/210335568-aff6c1fb-a650-4bd1-9627-3ed8defebebf.png">
