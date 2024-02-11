import React from "react";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
const MainPage = () => {
  return (
    <>
      <Header authed={false} />
      <Sidebar />
    </>
  );
};

export default MainPage;
