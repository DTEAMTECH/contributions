[<img src='https://raw.githubusercontent.com/DTEAMTECH/contributions/main/0g/utils/contributions.png' alt='0G'  width='100%'>](https://0g.ai/)

# 0G contributions folder

The 0G contributions folder contains scripts and tools designed to facilitate the efficient operation and monitoring of 0G blockchain systems. Each tool within this folder serves a unique function to support network stability and user engagement.
<br><br>

# Navigation
| Link | Description |
|-------------|-------------|
| [About 0G](#about-0g-system) | Insight into 0G's modular architecture, scalability, data availability, and other key features. |
| [0G resources](#0g-resources) | Links to essential resources, including the official website, GitHub, and social media. |
| [Our tools](#tools) | Descriptions of the tools provided in this repository. |
| [Our infra / services](#our-infra--services-on-dteamtech) | Details on infrastructure and services available on the DTEAM website. |
| [Our other contributions](#other-contributions) | Information on additional contributions to the 0G ecosystem. |
| [Storage status checker usage guide](#0g-storage-node-status-checker-usage) | A tool for verifying the status of your 0G storage node. Available on the Discord, it requires IP and port for operation. |
| [Faucet usage guide](#0g-community-discord-faucet-usage) | A backup solution to ensure token availability, allowing users to receive up to 1 token every 24 hours via Discord. |


# About 0G System
  * **Infinite Scalability:** 0G provides an infinitely scalable data availability layer with a built-in storage layer, capable of handling large volumes of Web2 and Web3 data, including on-chain AI.
  * **Data Storage Lane:** Achieves horizontal scalability through efficient data partitioning, allowing for large data transfers to be nearly instantaneous.
  * **Data Publishing Lane:** Guarantees data availability using a quorum-based system with VRF for random quorum selection, ensuring no data broadcasting bottlenecks.
  * **0G Storage:** On-chain database with Storage Nodes participating in Proof of Random Access (PoRA), rewarding nodes for correctly answering queries about archived data.
  * **0G DA Layer:** Built on top of 0G Storage, this layer uses a quorum-based architecture and VRF to ensure data availability, with GPUs accelerating the erasure coding process.
  * **Layer 2 (L2) Scalability:** Provides a 1,000x performance improvement over Ethereum’s danksharding and a 4x improvement over Solana’s Firedancer, supporting Web3’s massive data scaling needs.
  * **AI Integration:** Stores vast datasets and facilitates quick, on-chain AI model operations using 0G DA.



# 0G resources

| Resource | Link |
|-------------|-------------|
| Website | [https://0g.ai/](https://0g.ai/) |
| Twitter / X | [https://x.com/0G_labs](https://x.com/0G_labs) |
| Github | [https://github.com/0glabs](https://github.com/0glabs) |
| Discord | [https://discord.gg/0glabs](https://discord.gg/0glabs) |
| Linkedin | [https://www.linkedin.com/company/0g-labs](https://www.linkedin.com/company/0g-labs)    |
| Blog | [https://0g.ai/blog](https://0g.ai/blog) |

## Tools

- **0G storage status checker** / **Available on [Discord](https://discord.gg/BCeXe63Mm8)**: 0G storage status checker, the ultimate tool for ensuring the reliability and security of your 0G storage node. Designed with the community in mind, this checker allows you to easily verify the status of your storage node. Simply enter your IP and port to get started.
- **0G community [Discord](https://discord.gg/BCeXe63Mm8) faucet**: The 0G DTEAM Community Faucet is designed as a reliable backup solution to ensure that users can always receive tokens, even if the main faucet experiences problems. You can receive up to 1 token every 24 hours.
    
## Our infra / services on [dteam.tech](https://dteam.tech/)

- **Testnet(zgtendermint_16600-2):**
  
| Name | Description | Link |
|-------------|-------------|-------------|
| Overview | Links to 0G resources, DTEAM validator status, network parameters. | [https://dteam.tech/services/testnet/overview/0g](https://dteam.tech/services/testnet/overview/0g) |
| Installation guides | Comprehensive installation guides for various setups including consensus, cosmovisor, storage, kv, da, da-client nodes. | [Consensus](https://dteam.tech/services/testnet/installation-guide/0g?type=consensus)<br>[Consensus with cosmovisor](https://dteam.tech/services/testnet/installation-guide/0g?type=cosmovisor) |
| Snapshot | Provides the latest blockchain snapshots for quick node setup and synchronization. | [https://dteam.tech/services/testnet/snapshot/0g](https://dteam.tech/services/testnet/snapshot/0g) |
| State sync | Instructions and resources for state sync to speed up node synchronization. | [https://dteam.tech/services/testnet/state-sync/0g](https://dteam.tech/services/testnet/state-sync/0g) |
| Endpoints | Information on various network endpoints for connecting to the 0G testnet. | [https://dteam.tech/services/testnet/endpoints/0g](https://dteam.tech/services/testnet/endpoints/0g) |
| Addrbook | Contains the addrbook.json file for discovering peers and improving network connectivity. | [https://dteam.tech/services/testnet/endpoints/0g](https://dteam.tech/services/testnet/endpoints/0g) |
| Genesis | Provides the genesis.json file necessary for node initialization and network participation. | [https://dteam.tech/services/testnet/genesis/0g](https://dteam.tech/services/testnet/genesis/0g) |
| Persistent peers | List of persistent peers to enhance network stability and connectivity. | [https://dteam.tech/services/testnet/peers/0g](https://dteam.tech/services/testnet/peers/0g) |
| Useful commands / Cheat sheet | A collection of essential commands and a cheat sheet for managing 0G nodes effectively. | [https://dteam.tech/services/testnet/useful-commands/0g](https://dteam.tech/services/testnet/useful-commands/0g) |

## Other contributions

- **Endpoints**:
  * Testnet(zgtendermint_16600-2):
      * RPC: ```https://rpc.0g.testnet.dteam.tech:443```
      * Rest: ```https://api.0g.testnet.dteam.tech:443```
      * EVM: ```https://evm.0g.testnet.dteam.tech:443```
      * GRPC: ```grpc.0g.testnet.dteam.tech:28090```
        
- **Explorer:**
   * Testnet(zgtendermint_16600-2):
      * [https://explorer.testnet.dteam.tech/0G](https://explorer.testnet.dteam.tech/0g)

## 0G storage node status checker usage

To use the 0G storage node status checker, follow these steps:


## 0G community Discord faucet usage

To use the 0G community Discord faucet usage, follow these steps:
1. Usage:
   * In [Discord](https://discord.gg/BCeXe63Mm8): Go to #🚰・0g channel and type ```!faucet <0g_address>```
2. Check the results!

## Contribution

We welcome contributions to improve the scripts in this folder. Please follow the general contribution guidelines outlined in the main repository's README.

**Thank you for contributing to the projects supported by DTEAM!**
