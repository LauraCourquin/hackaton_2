import Malette from "@assets/images/malette.png";
import Building from "@assets/images/building.png";
import Hoclock from "@assets/images/hoclock.png";
import PropTypes from "prop-types";
import SCard from "./style";

export default function Card({
  name,
  mail,
  jobs,
  types,
  picture,
  // inProject,
  // skills
  clientName,
}) {
  return (
    <SCard>
      <div className="myCard">
        <div className="imgCard">
          <img src={picture} alt="actor" />
          <span className="available" />
        </div>
        <div className="Cardinfo">
          <h3>{name}</h3>
          <h4>{types}</h4>
        </div>
        <div className="mail">
          <p>{mail}</p>
        </div>
        <div className="info">
          <ul>
            <li>
              <img src={Malette} alt="Poste" />
              <li>{jobs}</li>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Building} alt="Building" />
              <li>{clientName}</li>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Hoclock} alt="Hoclock" />
              <li> </li>
            </li>
          </ul>
        </div>
        <div />
      </div>
    </SCard>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  jobs: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  // skills: PropTypes.string.isRequired,
};
