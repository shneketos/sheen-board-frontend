import React from "react";
import styles from "./EditBacklogStory.module.scss";

interface EditBacklogStoryProps {
    onStoryEditingChange: (newStoryEditingValue: boolean) => void;
}

export const EditBacklogStory = ({
    onStoryEditingChange,
}: EditBacklogStoryProps) => {
    const StoryVariables = Array.from({ length: 30 }, (_, i) => i + 1);
    const [newStoryValue, setNewStoryValue] = React.useState(15);

    const handleButtonClick = () => {
        onStoryEditingChange(false);
    };

    return (
        <div className={styles.story} onMouseLeave={handleButtonClick}>
            <ul className={styles.variables_list}>
                {StoryVariables.map((item) => (
                    <li
                        key={item}
                        className={`${styles.variable} ${
                            newStoryValue === item && styles.active
                        }`}
                        onClick={() => setNewStoryValue(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
