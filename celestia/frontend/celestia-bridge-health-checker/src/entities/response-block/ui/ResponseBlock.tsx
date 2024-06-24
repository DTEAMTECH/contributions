import React from 'react';
import styles from "./ResponseBlock.module.scss";

const ResponseBlock = ({ status, message }) => {

    const renderMessage = (msg) => {
        if (msg.includes('Warning:')) {
            const parts = msg.split('Warning:');
            return (
                <>
                    {parts.map((part, index) => (
                        <React.Fragment key={index}>
                            {part}
                            {index < parts.length - 1 && <span className={styles.warning}>Warning:</span>}
                        </React.Fragment>
                    ))}
                </>
            );
        }
        return msg;
    };

    if (status === "success") {
        return (
            <div className={styles.block}>
                <div className={styles.success}>
                    <h1>Good response</h1>
                    <p>{renderMessage(message)}</p>
                </div>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className={styles.block}>
                <div className={styles.error}>
                    <h1>Bad response</h1>
                    <p>Please, check your IP, port, token and try again.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.block}>
            <div className={styles.wait}>
                <h1>Waiting for check</h1>
                <p>Please, enter your IP, port, token and press the check button.</p>
            </div>
        </div>
    );
};

export default ResponseBlock;