import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ onClick, disabled, loading }) => {
    // console.log(loading)
    return (
        <button
            className={`${styles.button} ${loading ? styles.loading : ''}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? <div className={styles.spinner}></div> : 'CHECK'}
        </button>
    );
};

export default Button;