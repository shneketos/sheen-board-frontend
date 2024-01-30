import React from "react";
import styles from "./test.module.scss";
export const Test = () => {
  const onClick = () => {
    window.alert("123");
  };
  return (
    <div className={styles.app}>
      <button onClick={onClick}>CLICK ME</button>
    </div>
  );
};
