import CardList from "@components/CardList";
import SideBar from "@components/Sidebar";
import React from "react";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div className="backgr">
        <SideBar />
        <CardList />
      </div>
    </SHome>
  );
}
