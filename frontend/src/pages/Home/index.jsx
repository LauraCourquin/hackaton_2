import React from "react";
import SearchInput from "@components/SearchBar";
import SideBar from "@components/Sidebar";
import Card from "@components/Card";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div className="backgr">
        <SearchInput />
        <SideBar />
        <Card />
      </div>
    </SHome>
  );
}
