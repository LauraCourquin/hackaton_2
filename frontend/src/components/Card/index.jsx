import Malette from "@assets/images/malette.png";
import Building from "@assets/images/building.png";
import Hoclock from "@assets/images/hoclock.png";
import SCard from "./style";

export default function Card() {
  return (
    <SCard>
      <div className="myCard">
        <div className="imgCard">
          <img
            src="https://www.netcost-security.fr/wp-content/uploads/2021/11/1636044306_Lhistoire-de-GigaChad-lultra-masculin-mi-meme-mi-legende-urbaine.jpg"
            alt=""
          />
          <span className="available" />
        </div>
        <div className="Cardinfo">
          <h3>toto aez</h3>
          <h4>colaborateur</h4>
        </div>
        <div className="mail">
          <p className>azeaytguyhij@gmail</p>
        </div>
        <div className="info">
          <ul>
            <li>
              <img src={Malette} alt="Malette" />
              <li>RH</li>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Building} alt="Building" />
              <li>RH</li>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Hoclock} alt="Hoclock" />
              <li>RH</li>
            </li>
          </ul>
        </div>
        <div />
      </div>
    </SCard>
  );
}
