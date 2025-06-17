![celestia_contributions](https://github.com/user-attachments/assets/78186c4d-1148-4b7d-9437-a3cbbccbebb1)

# Celestia contributions folder

The Celestia contributions folder contains scripts and tools designed to facilitate the efficient operation and monitoring of Celestia blockchain systems. Each tool within this folder serves a unique function to support network stability and user engagement.
<br><br>

# Navigation
| Link | Description |
|-------------|-------------|
| [About Celestia](#about-celestia) | Insight into Celestia's modular architecture, scalability, data availability, and other key features. |
| [Celestia resources](#celestia-resources) | Links to essential resources, including the official website, GitHub, and social media. |
| [Our tools](#tools) | Descriptions of the tools provided in this repository. |
| [Our infra / services](#our-infra--services-on-dteamtech) | Details on infrastructure and services available on the DTEAM website. |
| [Our other contributions](#other-contributions) | Information on additional contributions to the Celestia ecosystem. |
| [Bridge checker usage guide](#celestia-bridge-health-checker-usage) | A tool for verifying the health of your Celestia bridge node. Available on the website and Discord, it requires IP, port, and authentication token for operation. |
| [Faucet usage guide](#celestia-community-discord-faucet-usage) | A backup solution to ensure token availability, allowing users to receive up to 10 tokens every 24 hours via Discord. |


# About Celestia
  * **Modular Architecture:** Celestia separates the consensus and data availability layers from the execution layer, allowing for customizable execution environments.
    
  * **Scalability:** Decoupling data availability from transaction execution results in higher throughput and greater transaction capacity.
    
  * **Data Availability Sampling:** This technique ensures all data in a block is available without requiring nodes to download the entire block, improving security and reducing bandwidth needs.
    
  * **Sovereign Rollups:** Supports independent execution environments that leverage Celestia's consensus and data availability.
    
  * **Interoperability:** Facilitates seamless integration and communication across different blockchain networks.
    
  * **Decentralization:** Lowers the barrier to running a full node, promoting a more decentralized and secure network.
    
  * **Ease of Use:** Simplifies development with clear APIs and tools, allowing developers to focus on application logic.

  * **Security:** Employs advanced cryptographic techniques to ensure data integrity and protection.
    
  * **Economics:** Introduces a novel economic model that incentivizes validators and supports network sustainability.

# Celestia resources

| Resource | Link |
|-------------|-------------|
| Website | [Link](https://celestia.org) |
| Twitter / X | [Link](https://twitter.com/CelestiaOrg) |
| Github | [Link](https://github.com/celestiaorg) |
| Discord | [Link](https://discord.gg/YrXs6nV4Ra) |
| Linkedin | [Link](https://www.linkedin.com/company/celestiaorg)    |
| Blog | [Link](https://blog.celestia.org/) |

## Tools

- **Celestia bridge health checker** / **Available on [website](https://celestia-bridge-checker.dteam.tech/) and [Discord](https://discord.gg/BCeXe63Mm8)**: Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.
- **Celestia community [Discord](https://discord.gg/BCeXe63Mm8) faucet**: The Celestia DTEAM Community Faucet is designed as a reliable backup solution to ensure that users can always receive tokens, even if the main faucet experiences problems. You can receive up to 10 tokens every 24 hours.
    
## Our infra / services on [dteam.tech](https://dteam.tech/)
  
| Name | Description | Link |
|-------------|-------------|-------------|
| Overview | Links to Celestia resources, DTEAM validator status, network parameters, and staking calculator for mainnet networks. | [Mainnet](https://dteam.tech/services/overview/celestia/mainnet) \| [Testnet](https://dteam.tech/services/overview/celestia/testnet) |
| Installation guides | Comprehensive installation guides for various setups including consensus, cosmovisor, bridge, full, and light nodes. | Mainnet:<br>[Consensus](https://dteam.tech/services/installation-guide/celestia/mainnet) \| [Consensus with cosmovisor](https://dteam.tech/services/installation-guide/celestia/mainnet?tab=cosmovisor) \| [Bridge](https://dteam.tech/services/installation-guide/celestia/mainnet?tab=bridge) \| [Full](https://dteam.tech/services/installation-guide/celestia/mainnet?tab=full) \| [Light](https://dteam.tech/services/installation-guide/celestia/mainnet?tab=light)<br><br>Testnet:<br>[Consensus](https://dteam.tech/services/installation-guide/celestia/testnet) \| [Consensus with cosmovisor](https://dteam.tech/services/installation-guide/celestia/testnet?tab=cosmovisor) \| [Bridge](https://dteam.tech/services/installation-guide/celestia/testnet?tab=bridge) \| [Full](https://dteam.tech/services/installation-guide/celestia/testnet?tab=full) \| [Light](https://dteam.tech/services/installation-guide/celestia/testnet?tab=light) |
| Snapshot | Provides the latest blockchain snapshots for quick node setup and synchronization. | [Mainnet](https://dteam.tech/services/snapshot/celestia/mainnet) \| [Testnet](https://dteam.tech/services/snapshot/celestia/testnet) |
| State sync | Instructions and resources for state sync to speed up node synchronization. | [Mainnet](https://dteam.tech/services/state-sync/celestia/mainnet) \| [Testnet](https://dteam.tech/services/state-sync/celestia/testnet) |
| Endpoints | Information on various network endpoints for connecting to the Celestia mainnet. | [Mainnet](https://dteam.tech/services/endpoints/celestia/mainnet) \| [Testnet](https://dteam.tech/services/endpoints/celestia/testnet) |
| Addrbook | Contains the addrbook.json file for discovering peers and improving network connectivity. | [Mainnet](https://dteam.tech/services/addrbook/celestia/mainnet) \| [Testnet](https://dteam.tech/services/addrbook/celestia/testnet) |
| Genesis | Provides the genesis.json file necessary for node initialization and network participation. | [Mainnet](https://dteam.tech/services/genesis/celestia/mainnet) \| [Testnet](https://dteam.tech/services/genesis/celestia/testnet) |
| Persistent peers | List of persistent peers to enhance network stability and connectivity. | [Mainnet](https://dteam.tech/services/peers/celestia/mainnet) \| [Testnet](https://dteam.tech/services/peers/celestia/testnet) |
| Seed node | Details on seed nodes for initial peer discovery and network bootstrapping. | [Mainnet](https://dteam.tech/services/seeds/celestia/mainnet) \| [Testnet](https://dteam.tech/services/seeds/celestia/testnet) |
| Useful commands / Cheat sheet | A collection of essential commands and a cheat sheet for managing Celestia nodes effectively. | [Mainnet](https://dteam.tech/services/useful-commands/celestia/mainnet) \| [Testnet](https://dteam.tech/services/useful-commands/celestia/testnet) |

## Other contributions

- **Endpoints / Archive**:
   * Mainnet(celestia):
      * RPC / Archive: ```https://rpc.archive.celestia.mainnet.dteam.tech:443```
      * Rest / Archive: ```https://api.archive.celestia.mainnet.dteam.tech:443```
      * GRPC / Archive: ```grpc.archive.celestia.mainnet.dteam.tech:28090```
   * Testnet(mocha-4):
      * RPC / Archive: ```https://rpc.archive.celestia.testnet.dteam.tech:443```
      * Rest / Archive: ```https://api.archive.celestia.testnet.dteam.tech:443```
      * GRPC / Archive: ```grpc.archive.celestia.testnet.dteam.tech:27090```

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
   * In [Discord](https://discord.gg/BCeXe63Mm8): Go to #🚰・celestia channel and type ```!faucet <celestia_address>```
2. Check the results!

## Contribution

We welcome contributions to improve the content in this folder. Please follow the general contribution guidelines outlined in the main repository's README.

**Thank you for contributing to the projects supported by DTEAM!**
