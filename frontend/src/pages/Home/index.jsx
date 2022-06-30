import Card from "@components/Card";
import SideBar from "@components/Sidebar";
import React from "react";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div className="backgr">
        <SideBar />
        <Card />
        <Card />
      </div>
    </SHome>
  );
}
