[<img src='https://raw.githubusercontent.com/DTEAMTECH/contributions/main/celestia/utils/contributions.png' alt='Celestia'  width='100%'>](https://celestia.org/)

# Celestia

This folder contains scripts and useful tools for Celestia. Each script has a specific purpose to ensure the smooth running and monitoring of the systems.

## Tools

- **Celestia bridge health checker** / **Available on [website](https://celestia-bridge-checker.dteam.tech/) and [Discord](https://discord.gg/BCeXe63Mm8)**: Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.
- **Celestia community [Discord](https://discord.gg/BCeXe63Mm8) faucet**: The Celestia DTEAM Community Faucet is designed as a reliable backup solution to ensure that users can always receive tokens, even if the main faucet experiences problems. You can receive up to 10 tokens every 24 hours.

## Other contributions

- **Endpoints / Archive**:
   * Mainnet(celestia):
      * RPC / Archive: ```https://rpc.archive.celestia.mainnet.dteam.tech:443```
      * Rest / Archive: ```https://api.archive.celestia.mainnet.dteam.tech:443```
      * GRPC / Archive: ```https://grpc.archive.celestia.mainnet.dteam.tech:443```
   * Testnet(mocha-4):
      * RPC / Archive: ```https://rpc.archive.celestia.testnet.dteam.tech:443```
      * Rest / Archive: ```https://api.archive.celestia.testnet.dteam.tech:443```
      * GRPC / Archive: ```https://grpc.archive.celestia.testnet.dteam.tech:443```

- **Seeds / Peers:**
   * Mainnet(celestia):
      * Seed: ```9b1d22c3a78487d1a664a4b6a331fce527d14fb4@seed.celestia.mainnet.dteam.tech:27656```
      * Peer: ```076c9cc9de3039819a98522aeea39e8c72b49682@peer.celestia.mainnet.dteam.tech:28656```
   * Testnet(mocha-4):
      * Seed: ```70e8a8941f32dc5f696e46ee836c27620e773065@seed.celestia.testnet.dteam.tech:26656```
      * Peer: ```6ed983017167d96c62b166725250940deb783563@peer.celestia.testnet.dteam.tech:27656```

- **Explorers / Archive:**
   * Mainnet(celestia):
      * [https://explorer.mainnet.dteam.tech/celestia](https://explorer.mainnet.dteam.tech/celestia)
   * Testnet(mocha-4):
      * [https://explorer.testnet.dteam.tech/celestia](https://explorer.testnet.dteam.tech/celestia)
      

## Celestia bridge health checker usage

To use the Celestia Bridge Health Checker, follow these steps:
1. Open RPC port and restart your node:
    * Open port:
      * Mainnet: ```sed -i '/\[RPC\]/,/^\[/ s/Address = "localhost"/Address = "0.0.0.0"/' $HOME/.celestia-bridge/config.toml```
      * Testnet: ```sed -i '/\[RPC\]/,/^\[/ s/Address = "localhost"/Address = "0.0.0.0"/' $HOME/.celestia-bridge-mocha-4/config.toml```
    * Restart node: ```sudo systemctl restart celestia-bridge```

2. Get data to use checker:
   * Get IP: ```hostname -I```
   * Get port:
      * Mainnet: ```awk -F' = ' '/\[RPC\]/ {flag=1; next} flag && /Port/ {gsub(/"/, "", $2); print $2; exit}' $HOME/.celestia-bridge/config.toml```
      * Testnet: ```awk -F' = ' '/\[RPC\]/ {flag=1; next} flag && /Port/ {gsub(/"/, "", $2); print $2; exit}' $HOME/.celestia-bridge-mocha-4/config.toml```
   * Get authentication token:
      * Mainnet: ```celestia bridge auth read```
      * Testnet: ```celestia bridge auth read --p2p.network mocha-4```

3. Usage: 
    * On the website: Go to [link](https://celestia-bridge-checker.dteam.tech/), fill in all the fields with the relevant data and press the "Check" button.
    * In [Discord](https://discord.gg/BCeXe63Mm8): Go to #🤖・celestia-bridge-checker channel and type ```!checknode <ip> <port> <token>```.
4. Check the results!

## Celestia community Discord faucet usage

To use the Celestia community Discord faucet usage, follow these steps:
1. Usage:
   * Go to #🚰・celestia channel and type ```!faucet <celestia_address>```
2. Check the results!

## Contribution

We welcome contributions to improve the scripts in this folder. Please follow the general contribution guidelines outlined in the main repository's README.

**Thank you for contributing to the projects supported by DTEAM!**
