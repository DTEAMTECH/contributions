import React, {FC} from 'react';
import styles from "./HealthCheckerSideHeader.module.scss"
const HealthCheckerSideHeader:FC = ({headerText}) => {
    return (
        <div className={styles.wrapper}>
            <h1>{headerText}</h1>
        </div>
    );
};

export default HealthCheckerSideHeader;