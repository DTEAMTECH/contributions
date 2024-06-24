import React, { FC } from 'react';
import styles from "./Input.module.scss";

const Input: FC = ({ inputName, value, onChange, error, placeholder }) => {
    return (
        <div className={styles.wrapper}>
            {/*{error && <p className={styles.error}>{error}</p>}*/}
            <h2>{inputName}</h2>
            <input
                className={error ? `${styles.input} ${styles.input__error}` : styles.input}
                type="text"
                name={inputName.toLowerCase().replace(/ /g, '')}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
