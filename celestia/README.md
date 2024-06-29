[<img src='https://raw.githubusercontent.com/DTEAMTECH/contributions/main/celestia/utils/contributions.png' alt='Celestia'  width='100%'>](https://celestia.org/)

# Celestia contributions folder

This folder contains scripts and useful tools for Celestia. Each script has a specific purpose to ensure the smooth running and monitoring of the systems.
<br><br>
| Navigation: |
|-------------|
| [About Celestia](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#about-celestia) |
| [Celestia resources](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#celestia-resources) |
| [Our tools](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#tools) |
| [Our infra / services](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#our-infra--services-on-website) |
| [Our other contributions](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#celestia-resources) |
| Our tools usage:<br>[Bridge health checker](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#celestia-bridge-health-checker-usage)<br>[Faucet](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#celestia-community-discord-faucet-usage) |
| [Contribute to this repo](https://github.com/DTEAMTECH/contributions/edit/main/celestia/README.md#contribution) |

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
| Website | [https://celestia.org/](https://celestia.org) |
| Twitter / X | [https://twitter.com/CelestiaOrg](https://twitter.com/CelestiaOrg) |
| Github | [https://github.com/celestiaorg](https://github.com/celestiaorg) |
| Discord | [https://discord.gg/YrXs6nV4Ra](https://discord.gg/YrXs6nV4Ra) |
| Linkedin | [https://www.linkedin.com/company/celestiaorg/](https://www.linkedin.com/company/celestiaorg)    |
| Blog | [https://blog.celestia.org/](https://blog.celestia.org/) |

## Tools

- **Celestia bridge health checker** / **Available on [website](https://celestia-bridge-checker.dteam.tech/) and [Discord](https://discord.gg/BCeXe63Mm8)**: Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.
- **Celestia community [Discord](https://discord.gg/BCeXe63Mm8) faucet**: The Celestia DTEAM Community Faucet is designed as a reliable backup solution to ensure that users can always receive tokens, even if the main faucet experiences problems. You can receive up to 10 tokens every 24 hours.
    
## Our infra / services on [dteam.tech](https://dteam.tech/)
- **Mainnet(celestia):**
  
| Name | Description | Link |
|-------------|-------------|-------------|
| Overview | Links to Celestia resources, DTEAM validator status, network parameters, and staking calculator for mainnet networks. | [https://dteam.tech/services/mainnet/overview/celestia](https://dteam.tech/services/mainnet/overview/celestia) |
| Installation guides | Comprehensive installation guides for various setups including consensus, cosmovisor, bridge, full, and light nodes. | [Consensus](https://dteam.tech/services/mainnet/installation-guide/celestia?type=consensus)<br>[Consensus with cosmovisor](https://dteam.tech/services/mainnet/installation-guide/celestia?type=cosmovisor)<br>[Bridge](https://dteam.tech/services/mainnet/installation-guide/celestia?type=bridge)<br>[Full](https://dteam.tech/services/mainnet/installation-guide/celestia?type=full)<br>[Light](https://dteam.tech/services/mainnet/installation-guide/celestia?type=light) |
| Snapshot | Provides the latest blockchain snapshots for quick node setup and synchronization. | [https://dteam.tech/services/mainnet/snapshot/celestia](https://dteam.tech/services/mainnet/snapshot/celestia) |
| State sync | Instructions and resources for state sync to speed up node synchronization. | [https://dteam.tech/services/mainnet/state-sync/celestia](https://dteam.tech/services/mainnet/state-sync/celestia) |
| Endpoints | Information on various network endpoints for connecting to the Celestia mainnet. | [https://dteam.tech/services/mainnet/endpoints/celestia](https://dteam.tech/services/mainnet/endpoints/celestia) |
| Addrbook | Contains the addrbook.json file for discovering peers and improving network connectivity. | [https://dteam.tech/services/mainnet/endpoints/celestia](https://dteam.tech/services/mainnet/endpoints/celestia) |
| Genesis | Provides the genesis.json file necessary for node initialization and network participation. | [https://dteam.tech/services/mainnet/genesis/celestia](https://dteam.tech/services/mainnet/genesis/celestia) |
| Persistent peers | List of persistent peers to enhance network stability and connectivity. | [https://dteam.tech/services/mainnet/peers/celestia](https://dteam.tech/services/mainnet/peers/celestia) |
| Seed node | Details on seed nodes for initial peer discovery and network bootstrapping. | [https://dteam.tech/services/mainnet/seeds/celestia](https://dteam.tech/services/mainnet/seeds/celestia) |
| Useful commands / Cheat sheet | A collection of essential commands and a cheat sheet for managing Celestia nodes effectively. | [https://dteam.tech/services/mainnet/useful-commands/celestia](https://dteam.tech/services/mainnet/useful-commands/celestia) |

- **Testnet(mocha-4):**
  
| Name | Description | Link |
|-------------|-------------|-------------|
| Overview | Links to Celestia resources, DTEAM validator status, network parameters. | [https://dteam.tech/services/testnet/overview/celestia](https://dteam.tech/services/testnet/overview/celestia) |
| Installation guides | Comprehensive installation guides for various setups including consensus, cosmovisor, bridge, full, and light nodes. | [Consensus](https://dteam.tech/services/testnet/installation-guide/celestia?type=consensus)<br>[Consensus with cosmovisor](https://dteam.tech/services/testnet/installation-guide/celestia?type=cosmovisor)<br>[Bridge](https://dteam.tech/services/testnet/installation-guide/celestia?type=bridge)<br>[Full](https://dteam.tech/services/testnet/installation-guide/celestia?type=full)<br>[Light](https://dteam.tech/services/testnet/installation-guide/celestia?type=light) |
| Snapshot | Provides the latest blockchain snapshots for quick node setup and synchronization. | [https://dteam.tech/services/testnet/snapshot/celestia](https://dteam.tech/services/testnet/snapshot/celestia) |
| State sync | Instructions and resources for state sync to speed up node synchronization. | [https://dteam.tech/services/testnet/state-sync/celestia](https://dteam.tech/services/testnet/state-sync/celestia) |
| Endpoints | Information on various network endpoints for connecting to the Celestia testnet. | [https://dteam.tech/services/testnet/endpoints/celestia](https://dteam.tech/services/testnet/endpoints/celestia) |
| Addrbook | Contains the addrbook.json file for discovering peers and improving network connectivity. | [https://dteam.tech/services/testnet/endpoints/celestia](https://dteam.tech/services/testnet/endpoints/celestia) |
| Genesis | Provides the genesis.json file necessary for node initialization and network participation. | [https://dteam.tech/services/testnet/genesis/celestia](https://dteam.tech/services/testnet/genesis/celestia) |
| Persistent peers | List of persistent peers to enhance network stability and connectivity. | [https://dteam.tech/services/testnet/peers/celestia](https://dteam.tech/services/testnet/peers/celestia) |
| Seed node | Details on seed nodes for initial peer discovery and network bootstrapping. | [https://dteam.tech/services/testnet/seeds/celestia](https://dteam.tech/services/testnet/seeds/celestia) |
| Useful commands / Cheat sheet | A collection of essential commands and a cheat sheet for managing Celestia nodes effectively. | [https://dteam.tech/services/testnet/useful-commands/celestia](https://dteam.tech/services/testnet/useful-commands/celestia) |

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
