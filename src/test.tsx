import React from "react";
import "./test.scss";
export const Test = () => {
  const onClick = () => {
    window.alert("123");
  };
  return (
    <div>
      <button onClick={onClick}>CLICK ME</button>
    </div>
  );
};
