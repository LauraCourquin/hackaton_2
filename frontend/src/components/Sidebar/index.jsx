import React from "react";
import logo from "@assets/SideBar/apside.png";
import shop from "@assets/SideBar/shop.svg";
import SCardForm from "./style";

export default function SideBar() {
  return (
    <SCardForm>
      <img src={logo} alt="Logo Apside" />
      <button type="button">
        <img src={shop} alt="home logo" className="shopImg" />
        Accueil
      </button>
      <button type="button"> Client </button>
      <button type="button"> Partenaire Ext </button>
      <button type="button"> Intervenant </button>
      <button type="button"> Collaborateur </button>
    </SCardForm>
  );
}
