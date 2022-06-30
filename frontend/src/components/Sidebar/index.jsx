import React from "react";
import logo from "@assets/SideBar/apside.png";
import shop from "@assets/SideBar/shop.svg";
import client from "@assets/SideBar/client.png";
import partenaire from "@assets/SideBar/partenaire.png";
import batiment from "@assets/SideBar/batiment.png";

import SCardForm from "./style";

export default function SideBar() {
  return (
    <SCardForm>
      <img src={logo} alt="Logo Apside" />
      <button type="button">
        <div className="svgContainerHome">
          <img src={shop} alt="home logo" className="shopImg" />
        </div>
        Accueil
      </button>
      <button type="button">
        <div className="svgContainer">
          <img src={client} alt="home logo" className="shopImg" />
        </div>
        Client
      </button>
      <button type="button">
        <div className="svgContainer">
          <img src={partenaire} alt="home logo" className="shopImg" />
        </div>
        Partenaire Ext
      </button>
      <button type="button">
        <div className="svgContainer">
          <img src={batiment} alt="home logo" className="shopImg" />
        </div>
        Intervenant
      </button>
      <button type="button">
        <div className="svgContainer">
          <img src={batiment} alt="home logo" className="shopImg" />
        </div>
        Collaborateur
      </button>
    </SCardForm>
  );
}
