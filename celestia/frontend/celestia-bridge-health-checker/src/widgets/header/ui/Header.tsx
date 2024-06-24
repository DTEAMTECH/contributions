import React from 'react';
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Celestia Bridge Health Checker</h1>
            <p>{"Welcome to DTEAM's Celestia Bridge Health Checker, the ultimate tool for ensuring the reliability and security of your Celestia bridge node. Designed with the community in mind, this checker allows you to easily verify the health of your bridge nodes. Simply enter your IP, port, and authentication token to get started."}
            </p>
        </header>
    );
};

export default Header;