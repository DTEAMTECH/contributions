[<img src='https://raw.githubusercontent.com/DTEAMTECH/contributions/main/celestia/utils/contributions.png' alt='Celestia'  width='100%'>](https://celestia.org/)

# Celestia

This folder contains scripts and useful tools for Celestia. Each script has a specific purpose to ensure the smooth running and monitoring of the systems.

## Tools

- **Celestia Bridge Health Checker**: Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started.

## Celestia Bridge Health Checker Usage

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

3. Fill in all the fields with the relevant data and press the "Check" button.
  
4. Check the results!

## Contribution

We welcome contributions to improve the scripts in this folder. Please follow the general contribution guidelines outlined in the main repository's README.

**Thank you for contributing to the projects supported by DTEAM!**
