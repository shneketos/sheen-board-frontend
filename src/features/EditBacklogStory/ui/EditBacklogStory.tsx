import React from "react";
import styles from "./EditBacklogStory.module.scss";
import { type EditBacklogStoryProps } from "../modal/types/EditBacklogStory";

export const EditBacklogStory = (props: EditBacklogStoryProps) => {
    const { onStoryEditingChange, storypoints } = props;
    const StoryVariables = Array.from({ length: 30 }, (_, i) => i + 1);
    const [newStoryValue, setNewStoryValue] = React.useState(storypoints);

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