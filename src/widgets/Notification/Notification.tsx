import { useEffect, useState } from "react";
import styles from "./Notification.module.scss";
import { Portal } from "../../shared/ui/Portal/Portal";
import {
    NotificationTheme,
    useNotification,
} from "app/providers/notificationProvider/ui/NotificationProvider";

interface NotificationProps {
    message: string;
    visible: boolean;
    theme: NotificationTheme;
}

export const Notification: React.FC<NotificationProps> = ({
    message,
    visible,
    theme,
}) => {
    const [isVisible, setIsVisible] = useState(visible);
    const duration = 1700;
    const { setVisible } = useNotification();

    useEffect(() => {
        setIsVisible(visible);
        if (visible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                setVisible(false);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration, setIsVisible, setVisible, visible]);

    return (
        <Portal>
            {isVisible && (
                <div
                    className={`${styles.notification} ${
                        isVisible ? styles.visible : styles.hidden
                    } ${styles[theme]}`}
                >
                    <p className={styles.message}>{message}</p>
                </div>
            )}
        </Portal>
    );
};
