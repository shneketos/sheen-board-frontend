import React from "react";
import styles from "./OverviewHeader.module.scss";
export const OverviewHeader = () => {
    const Params = { name: "PGUTI TEST PAGE" };
    const total = {
        total: 340,
        done: 10,
        doing: 12,
        todo: 10,
    };
    const percentTotal = ((total.done / total.total) * 100).toFixed(0);
    const userList = [
        "Nikita Shinkevich",
        "Andrey Markov",
        "Ivan Smirnov",
        "Ivan Rybakyn",
        "Ivan Rybakyn",
    ];
    return (
        <div className={styles.projectheader}>
            <div className={styles.projectheader_top}>
                <div className={styles.projectheader_left}>
                    <p className={styles.title}>{Params.name}</p>
                    <div className={styles.projectheader_left_bottom}>
                        <div className={styles.projectheader_progressbar}>
                            <div
                                className={
                                    styles.projectheader_progressbar_line
                                }
                                style={{ width: `${percentTotal}%` }}
                            ></div>
                        </div>
                        <span className={styles.projectheader_progressbar_text}>
                            {`${percentTotal}% completed`}
                        </span>
                    </div>
                </div>
                <div className={styles.projectheader_right}>
                    <div className={styles.projectheader_right_users}>
                        {userList.slice(0, 4).map((user, index) => (
                            <span
                                key={index}
                                className={
                                    styles.projectheader_right_users_user
                                }
                            >
                                {user.toUpperCase()[0]}
                                {user.toUpperCase()[1]}
                            </span>
                        ))}
                        {userList.length > 4 && (
                            <span
                                className={
                                    styles.projectheader_right_users_user
                                }
                            >
                                +{userList.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
