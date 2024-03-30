import React from "react";
import styles from "./Avatar.module.scss";
interface AvatarProps {
    src: string;
    name: string;
}
export const Avatar = (props: AvatarProps) => {
    const { src, name } = props;
    return (
        <div className={styles.avatar}>
            {src !== "" ? (
                <img className={styles.img} src={src} alt="avatar" />
            ) : (
                <div className={styles.name}>{name[0].toUpperCase()}</div>
            )}
        </div>
    );
};
