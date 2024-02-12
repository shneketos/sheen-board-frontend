import React from "react";
import styles from "./Sidebar.module.scss";
import Sidebar_arrow from "shared/assets/icons/sidebar_arrow.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const onClickCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.sidebar_bottom}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={styles.toggle_collapse}
          onClick={onClickCollapse}
        >
          <Sidebar_arrow
            className={`${styles.collapse_icon} ${
              collapsed ? styles.collapsed_icon : ""
            }`}
          />
        </Button>
      </div>
    </div>
  );
};
