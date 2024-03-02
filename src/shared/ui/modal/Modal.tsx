import React, { useCallback } from "react";
import { useRef, type ReactNode } from "react";
import styles from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    children?: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = React.useState(false);
    const TimerRef = useRef<ReturnType<typeof setTimeout>>();
    const onClickClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            TimerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = React.useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClickClose();
            }
        },
        [onClickClose]
    );
    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(TimerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div
                data-testid="modal"
                className={` ${styles.modal} ${isOpen ? styles.opened : ""} ${
                    isClosing ? styles.closed : ""
                }`}
            >
                <div className={styles.overlay} onClick={onClickClose}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
