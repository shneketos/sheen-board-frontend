import { createContext, useContext, useState } from "react";
import { Notification } from "widgets/Notification/Notification";

export enum NotificationTheme {
    ERROR = "error",
    SUCCESS = "success",
}

interface NotificationContextType {
    visible: boolean;
    message: string;
    theme: NotificationTheme;
    setVisible: (visible: boolean) => void;
    setMessage: (message: string) => void;
    setNotificationTheme: (theme: NotificationTheme) => void;
}

const NotificationContext = createContext<NotificationContextType>({
    visible: false,
    message: "",
    theme: NotificationTheme.SUCCESS,
    setVisible: () => {},
    setMessage: () => {},
    setNotificationTheme: () => {},
});

export const NotificationProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [theme, setNotificationTheme] = useState(NotificationTheme.SUCCESS);

    return (
        <NotificationContext.Provider
            value={{
                visible,
                message,
                theme,
                setVisible,
                setMessage,
                setNotificationTheme,
            }}
        >
            {children}
            {visible && (
                <Notification
                    message={message}
                    visible={visible}
                    theme={theme}
                />
            )}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
