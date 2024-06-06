#!/bin/bash

if [ "$#" -ne 3 ]; then
    echo "Usage: $0 YOUR_RPC TELEGRAM_TOKEN CHAT_ID"
    exit 1
fi

YOUR_RPC="$1"
TELEGRAM_TOKEN="$2"
CHAT_ID="$3"

RPC_TO_COMPARE="https://rpc.initia.testnet.dteam.tech"

send_telegram_message() {
    local message=$1
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" -d chat_id="${CHAT_ID}" -d text="${message}"
}

get_rpc_data() {
    local url=$1
    curl -s -H "Accept: application/json" --max-time 10 $url/abci_info
}

while true; do
    response_to_compare=$(get_rpc_data $RPC_TO_COMPARE)
    response_your_rpc=$(get_rpc_data $YOUR_RPC)

    if [ -z "$response_to_compare" ]; then
        send_telegram_message "Compare RPC is not available."
    fi

    if [ -z "$response_your_rpc" ]; then
        send_telegram_message "Your RPC is not available."
    fi

    height_to_compare=$(echo $response_to_compare | jq -r '.result.response.last_block_height')
    height_your_rpc=$(echo $response_your_rpc | jq -r '.result.response.last_block_height')

    height_difference=$((height_to_compare - height_your_rpc))

    if [ $height_difference -ge 1000 ]; then
        send_telegram_message "Your RPC is $height_difference blocks behind. Restarting node..."
        sudo systemctl restart initiad
    elif [ $height_difference -ge 300 ]; then
        send_telegram_message "Your RPC is $height_difference blocks behind. Restarting node..."
        sudo systemctl restart initiad
    elif [ $height_difference -ge 100 ]; then
        send_telegram_message "Your RPC is $height_difference blocks behind. Restarting node..."
        sudo systemctl restart initiad
    fi

    echo "Waiting 30 minutes before next check..."
    sleep 1800
done
