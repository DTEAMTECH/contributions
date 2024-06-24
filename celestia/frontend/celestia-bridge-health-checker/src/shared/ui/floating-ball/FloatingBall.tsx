import React, { FC } from 'react';
import styles from "./FloatingBall.module.scss";
import Image from "next/image";

interface FloatingBallProps {
    left: string;
    top: string;
    size: string;
    animationDuration: number;
    imageUrl: string;
}

const FloatingBall: FC<FloatingBallProps> = ({ left, top, size, animationDuration, imageUrl }) => {
    return (
        <div className={styles.floating__ball}
             style={{
                 left,
                 top,
                 width: size,
                 height: size,
                 animationDuration: `${animationDuration}s`
             }}>
            <Image src={imageUrl} alt="floating" className={styles.floating__image} width={500} height={500} />
        </div>
    );
};

export default FloatingBall;
