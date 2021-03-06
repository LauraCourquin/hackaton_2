import Malette from "@assets/images/malette.png";
import Building from "@assets/images/building.png";
import Hoclock from "@assets/images/hoclock.png";
import PropTypes from "prop-types";
import SCard from "./style";

export default function Card({
  firstname,
  lastname,
  projectName,
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
          <h1>{firstname}</h1>
          <h2>{lastname}</h2>
          <h3>{projectName}</h3>
          <h4>{types}</h4>
        </div>
        <div className="mail">
          <p>{mail}</p>
        </div>
        <div className="info">
          <ul>
            <li>
              <img src={Malette} alt="Poste" />
              <p>{jobs}</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Building} alt="Building" />
              <p>{clientName}</p>
            </li>
          </ul>
          <ul>
            <li>
              <img src={Hoclock} alt="Hoclock" />
              <p>e </p>
            </li>
          </ul>
        </div>
        <div />
      </div>
    </SCard>
  );
}

Card.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  jobs: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  // skills: PropTypes.string.isRequired,
};
