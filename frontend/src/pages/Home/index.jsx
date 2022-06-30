import Card from "@components/Card";
import Header from "@components/Header";
import SideBar from "@components/Sidebar";
import React from "react";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div className="backgr">
        <SideBar className="aside" />
        <Header className="header" />
        <Card className="cardSpace" />
      </div>
    </SHome>
  );
}
