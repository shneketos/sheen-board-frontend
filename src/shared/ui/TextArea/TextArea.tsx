import React, { type ReactNode } from "react";

interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    children?: ReactNode;
    cname?: string;
}

export const TextArea = (props: TextAreaProps) => {
    const { children, value, onChange, cname } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={` ${cname}`}>
            {children}
            <textarea
                className={cname}
                value={value}
                onChange={onChangeHandler}
                autoCapitalize="off"
            />
        </div>
    );
};
