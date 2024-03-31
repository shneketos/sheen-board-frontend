import styles from "./Avatar.module.scss";

export enum AvatarSize {
    DEFAULT = "default",
    LARGE = "large",
}

interface AvatarProps {
    src: string;
    name: string;
    size?: AvatarSize;
}
export const Avatar = (props: AvatarProps) => {
    const { src, name, size = AvatarSize.DEFAULT } = props;
    return (
        <div className={`${styles.avatar} ${styles[size]}`}>
            {src !== "" ? (
                <img className={styles.img} src={src} alt="avatar" />
            ) : (
                <div className={styles.name}>{name[0].toUpperCase()}</div>
            )}
        </div>
    );
};
