# Initia

This folder contains scripts and useful tools for Initia. Each script has a specific purpose to ensure the smooth running and monitoring of the systems.

## Files

- **initia-rpc-health-checker.sh**: This script is designed to check the health of Initia RPC endpoints. It helps monitor and ensure the reliability of your RPC services.

## Usage

To use the `initia-rpc-health-checker.sh` script, follow these steps:
1. Install dependencies:
    ```bash
    sudo apt update
    apt install jq screen -y
    ```
2. Download and run the script:
    ```bash
    wget https://raw.githubusercontent.com/DTEAMTECH/contributions/main/initia/initia-rpc-health-checker.sh
    chmod +x initia-rpc-health-checker.sh
    screen -S initia-rpc-health-checker
    bash initia-rpc-health-checker.sh <your RPC address> <telegram token> <telegram chat id> 
    ```
    **To close the screen window press CTRL + A + D.**

    **Example of a command to run the script:**
    ```bash
    bash initia-rpc-health-checker.sh https://rpc.initia.testnet.dteam.tech 5827125696:AAHBTOJClY32FvsAfQTPxxxxxxrdF1XSZ84 656290000
    ```

  
   
3. Follow any on-screen instructions or prompts to complete the health check.

## Contribution

We welcome contributions to improve the scripts in this folder. Please follow the general contribution guidelines outlined in the main repository's README.

**Thank you for contributing to the DTEAM projects!**
