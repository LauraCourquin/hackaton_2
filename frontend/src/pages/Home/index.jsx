// import CardList from "@components/CardList";
import CardLol from "@components/CardList";
import Header from "@components/Header";
import SideBar from "@components/Sidebar";
import React from "react";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div className="backgr">
        <SideBar className="aside" />
        <div className="column">
          <Header className="header" />
          {/* <CardList className="cardSpace" /> */}
          <CardLol />
        </div>
      </div>
    </SHome>
  );
}
