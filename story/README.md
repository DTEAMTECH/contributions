[<img src='https://raw.githubusercontent.com/DTEAMTECH/contributions/refs/heads/main/story/utils/contributions.png' alt='Story Protocol'  width='100%'>](https://www.story.foundation/)

# Story Protocol Contributions Folder
This repository contains tools, resources, and documentation made by DTEAM to support Story Protocol ecosystem. It provides comprehensive guides, exploring key features, and utilizing tools like IP visualizer and node installer. Additionally, it includes links to official Story Protocol resources and guidelines for community contributions.

## Navigation
| Link | Description |
|-------------|-------------|
| [About](#about-story-protocol) | A concise overview of the Story Protocol. |
| [Key Features](#key-features-of-story-protocol) | An outline of the unique capabilities and functionalities that set Story Protocol apart. |
| [Resources / Links](#resources--links) | Access official resources, including the website, GitHub, and social media platforms. |
| [Tools](#tools) | Explore tools developed by DTEAM for seamless interaction with the Story Protocol ecosystem. |
| [Infrastructure / Services](#infrastructure--services) | Details on infrastructure and services available on the DTEAM website. |
| [Other Contributions](#other-contributions) | Discover extra resources such as archive endpoints, seeds, and peer information. |
| [How to Contribute](#how-to-contribute) | Guidelines for contributing to this repository. |

## About Story Protocol
Story Protocol is a blockchain-based platform designed to streamline the management, licensing, and monetization of intellectual property (IP). By registering IP as programmable on-chain assets, it automates processes like licensing and royalty distribution using smart contracts. The platform integrates legal enforceability through its Programmable IP License (PIL), bridging blockchain and real-world legal systems. It is built on the Story Network, a Layer 1 blockchain optimized for fast, cost-efficient handling of complex IP data.

## Key Features of Story Protocol
  * **Programmable IP on Blockchain:** Allows creators to register their intellectual property (IP) as programmable assets on a decentralized blockchain. This automates licensing, monetization, and enforcement of IP terms.
    
  * **Layer 1 Blockchain:** A purpose-built blockchain combining EVM (Ethereum Virtual Machine) compatibility with Cosmos SDK optimizations for handling complex data structures like IP graphs efficiently and cost-effectively.
  * **Proof-of-Creativity Protocol:** A smart contract-based system enabling users to on-ramp IP to the blockchain. It includes registering IP as on-chain assets represented by NFTs and associated IP accounts.
  * **Licensing and Royalty Modules:** Modular components to manage IP:
    * Licensing Module: Streamlines licensing agreements;
    * Royalty Module: Automates revenue distribution from derivative works;
    * Dispute Module: Provides on-chain mechanisms for IP dispute resolution.
  * **Programmable IP License (PIL):** A legally binding, off-chain agreement that links tokenized IP with real-world legal systems, ensuring enforceable terms for licensing, remixing, and monetization.

## Resources / Links
| Resource | Link |
|-------------|-------------|
| Website | [https://www.story.foundation](https://www.story.foundation) |
| Twitter / X | [https://x.com/StoryProtocol](https://x.com/StoryProtocol) |
| Github | [https://github.com/storyprotocol](https://github.com/storyprotocol) |
| Discord | [https://discord.gg/storyprotocol](https://discord.gg/storyprotocol) |
| Linkedin | [https://www.linkedin.com/company/story-protocol](https://www.linkedin.com/company/story-protocol) |

## Tools
| Name | Description | Link |
|-------------|-------------|-------------|
| Graph IP Visualizer / Graph IP Explorer | This tool would help users explore and understand the connections between different IP assets, providing a clear and interactive way to navigate the web of IP ownership. | [https://graph-story.app](https://graph-story.app) |
| Chat GPT Plugin | AI-powered plugin designed to simplify the complexities of intellectual property and digital content management. It provides clear guidance on registering creative works, quick answers about usage rights, and an easy-to-understand overview of fair usage and IP rules - empowering creators and users alike. | [https://chatgpt.com/g/g-673b6f19371481919fe8b41d62d0d83d-story-protocol-assistant-by-dteam](https://chatgpt.com/g/g-673b6f19371481919fe8b41d62d0d83d-story-protocol-assistant-by-dteam) |
| Story Installer | This is a simple command line tool to spin up Story Protocol node. It is designed to be simple and easy to use. | [https://github.com/DTEAMTECH/story-installer](https://github.com/DTEAMTECH/story-installer) |

## Infrastructure / Services
- **Testnet(odyssey-0):**

| Name | Description | Link |
|-------------|-------------|-------------|
| Overview | Links to Story Protocol resources, DTEAM validator status, network parameters. | [https://dteam.tech/services/testnet/overview/story](https://dteam.tech/services/testnet/overview/story) |
| Installation Guides | Comprehensive installation guides for various setups including consensus and consensus with cosmovisor. | [Consensus](https://dteam.tech/services/testnet/installation-guide/story?type=consensus) / [Consensus with Cosmovisor](https://dteam.tech/services/testnet/installation-guide/story?type=cosmovisor) |
| Snapshot | Provides the latest blockchain snapshots for quick node setup and synchronization. | [Pruned](https://dteam.tech/services/testnet/snapshot/story?type=pruned) / [Archive](https://dteam.tech/services/testnet/snapshot/story?type=archive) |
| State Sync | Instructions and resources for state sync to speed up node synchronization. | [https://dteam.tech/services/testnet/state-sync/story](https://dteam.tech/services/testnet/state-sync/story) |
| Endpoints | Information on various network endpoints for connecting to the Story Protocol testnet. | [https://dteam.tech/services/testnet/endpoints/story](https://dteam.tech/services/testnet/endpoints/story) |
| Addrbook | Contains the addrbook.json file for discovering peers and improving network connectivity. | [https://dteam.tech/services/testnet/addrbook/story](https://dteam.tech/services/testnet/addrbook/story) |
| Genesis | Provides the genesis.json file necessary for node initialization and network participation. | [https://dteam.tech/services/testnet/genesis/story](https://dteam.tech/services/testnet/genesis/story) |
| Persistent Peers | List of persistent peers to enhance network stability and connectivity. | [https://dteam.tech/services/testnet/peers/story](https://dteam.tech/services/testnet/peers/story) |
| Seed Node | Details on seed nodes for initial peer discovery and network bootstrapping. | [https://dteam.tech/services/testnet/seeds/story](https://dteam.tech/services/testnet/seeds/story) |

## Other Contributions
#### **Endpoints**:
   * Testnet(odyssey-0):
      * **First server (Archive):**
         * Cosmos RPC: ```https://rpc.story.testnet.dteam.tech```
         * Cosmos WSS RPC: ```wss://rpc.story.testnet.dteam.tech/websocket```
         * Cosmos REST: ```https://api.story.testnet.dteam.tech```
         * EVM RPC: ```https://evm-rpc.story.testnet.dteam.tech```
         * EVM WSS RPC: ```wss://evm-rpc.wss.story.testnet.dteam.tech```
           
      * **Second server (Archive):**
         * Cosmos RPC: ```https://rpc-2.story.testnet.dteam.tech```
         * Cosmos WSS RPC: ```wss://rpc-2.story.testnet.dteam.tech/websocket```
         * Cosmos REST: ```https://api-2.story.testnet.dteam.tech```
         * EVM RPC: ```https://evm-rpc-2.story.testnet.dteam.tech```
         * EVM WSS RPC: ```wss://evm-rpc-2.wss.story.testnet.dteam.tech```
           
      * **Third server (Archive):**
         * Cosmos RPC: ```https://rpc-3.story.testnet.dteam.tech```
         * Cosmos WSS RPC: ```wss://rpc-3.story.testnet.dteam.tech/websocket```
         * Cosmos REST: ```https://api-3.story.testnet.dteam.tech```
         * EVM RPC: ```https://evm-rpc-3.story.testnet.dteam.tech```
         * EVM WSS RPC: ```wss://evm-rpc-3.wss.story.testnet.dteam.tech```

#### **Seeds / Peers:**
   * Testnet(odyssey-0):
      * Seed: ```6fc1491d5b8b859c1fafbe129fe4c0f842836a79@seed.story.testnet.dteam.tech:32656```
      * Peer: ```dc60dd34a95b92188b00e027bfd956552c029ac2@peer.story.testnet.dteam.tech:37656```

## How to Contribute
We welcome contributions to improve this folder. Please follow the general contribution guidelines outlined in the main repository's README.

**Thank you for contributing to the projects supported by DTEAM!**
