import React from "react";
import styles from "./Sidebar.module.scss";
export const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <button className={styles.toggle} onClick={onCollapse}>
        Toggle
      </button>
    </div>
  );
};
