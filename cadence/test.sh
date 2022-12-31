# Setup (Deployer)
flow transactions send ./transactions/setup_account.cdc --signer emulator-account

flow transactions send ./transactions/add_allowed_template.cdc 1 --signer emulator-account
flow transactions send ./transactions/add_allowed_template.cdc 2 --signer emulator-account
flow transactions send ./transactions/add_allowed_template.cdc 3 --signer emulator-account

# Setup (Users): 0x01cf0e2f2f715450
flow accounts create --key a4a6a6c3503d28935c3ab30327345c16f98e592f17dd7ed55168e8855d94b9b0e600e7cbc16c443b01f55213d470a5fe29d5694f3d5e29ef87a5f36587c0c7e8
flow transactions send ./transactions/setup_account.cdc --signer emulator-account2
# Setup (Users): 0x179b6b1cb6755e31
flow accounts create --key 2dc9e9dba28f62a38a5d1fa7acf953027b96bd36555b2a7504bcf477026143e3e4db7406d094d285ef7f0b2f224400601dc0526759eebf618a82ebbabd931c6e
flow transactions send ./transactions/setup_account.cdc --signer emulator-account3

# Create template
flow transactions send ./transactions/create_template.cdc --signer emulator-account2
flow scripts execute ./scripts/get_template_ids.cdc 0x01cf0e2f2f715450

# Create template (Re)
flow transactions send ./transactions/create_template.cdc --signer emulator-account2

# Delete template
flow transactions send ./transactions/delete_template.cdc 2 --signer emulator-account2

# Mint NFT
flow transactions send ./transactions/mint_nft.cdc \
    --args-json '[
        { "type": "Dictionary", "value": [
            { "key": { "type": "String", "value": "$message"}, "value": { "type": "String", "value": "家族全員が安全に毎日を過ごせますように" }},
            { "key": { "type": "String", "value": "$name"}, "value": { "type": "String", "value": "2023/01/01 Ara" }},
            { "key": { "type": "String", "value": "$messageFontSize"}, "value": { "type": "String", "value": "1.8em" }},
            { "key": { "type": "String", "value": "$nameFontSize"}, "value": { "type": "String", "value": "0.8em" }}
        ]},
        { "type": "Address", "value": "0x01cf0e2f2f715450" },
        { "type": "UInt64", "value": "1" }
    ]' \
    --signer emulator-account2

# Transfer NFT
flow transactions send ./transactions/transfer_nft.cdc 0x179b6b1cb6755e31 1 --signer emulator-account2

# View NFT Metadata
flow scripts execute ./scripts/get_collection_length.cdc 0x179b6b1cb6755e31
flow scripts execute ./scripts/get_nft_metadata.cdc 0x179b6b1cb6755e31 1
flow scripts execute ./scripts/get_nft_metadata_svgs.cdc 0x179b6b1cb6755e31

# Update NFT template
flow transactions send ./transactions/create_template.cdc --signer emulator-account3
flow transactions send ./transactions/update_nft_template.cdc \
    --args-json '[
        { "type": "UInt64", "value": "1" },
        { "type": "Address", "value": "0x179b6b1cb6755e31" },
        { "type": "UInt64", "value": "3" }
    ]' \
    --signer emulator-account3

# Update NFT template
flow transactions send ./transactions/update_nft_params.cdc \
    --args-json '[
        { "type": "UInt64", "value": "1" },
        { "type": "Dictionary", "value": [
            { "key": { "type": "String", "value": "$message"}, "value": { "type": "String", "value": "交通安全" }},
            { "key": { "type": "String", "value": "$name"}, "value": { "type": "String", "value": "2023/01/02 Ara" }},
            { "key": { "type": "String", "value": "$messageFontSize"}, "value": { "type": "String", "value": "1.8em" }},
            { "key": { "type": "String", "value": "$nameFontSize"}, "value": { "type": "String", "value": "0.8em" }}
        ]}
    ]' \
    --signer emulator-account3
flow scripts execute ./scripts/get_nft_metadata_svgs.cdc 0x179b6b1cb6755e31

# Update Template
flow transactions send ./transactions/update_template.cdc 3 --signer emulator-account3
flow scripts execute ./scripts/get_nft_metadata_svgs.cdc 0x179b6b1cb6755e31

###

# Many Mint NFTs
flow transactions send ./transactions/transfer_flow.cdc 1.0 01cf0e2f2f715450 --signer emulator-account
flow transactions send ./transactions/mint_nfts_many.cdc \
    --args-json '[
        { "type": "Dictionary", "value": [
            { "key": { "type": "String", "value": "$message"}, "value": { "type": "String", "value": "家族全員が安全に毎日を過ごせますように" }},
            { "key": { "type": "String", "value": "$name"}, "value": { "type": "String", "value": "2023/01/01 Ara" }},
            { "key": { "type": "String", "value": "$messageFontSize"}, "value": { "type": "String", "value": "1.8em" }},
            { "key": { "type": "String", "value": "$nameFontSize"}, "value": { "type": "String", "value": "0.8em" }}
        ]},
        { "type": "Address", "value": "0x01cf0e2f2f715450" },
        { "type": "UInt64", "value": "1" }
    ]' \
    --gas-limit 9999 \
    --signer emulator-account2

flow scripts execute ./scripts/get_nft_metadata_svgs_showcase.cdc 10 20
flow scripts execute ./scripts/get_nft_metadata_svgs_showcase.cdc 80 101
