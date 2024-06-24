import React from 'react';
import HealthChecker from "@/src/widgets/health-checker/ui/HealthChecker";
import styles from "./HomePage.module.scss"
const HomePage = () => {
    return (
        <main className={styles.wrapper}>
            <HealthChecker />
        </main>
    );
};

export default HomePage;