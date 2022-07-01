import Malette from "@assets/images/malette.png";
import Building from "@assets/images/building.png";
import Hoclock from "@assets/images/hoclock.png";
import PropTypes from "prop-types";
import SLol from "./style";

export default function Lol({
  firstname,
  lastname,
  name,
  mail,
  jobs,
  types,
  picture,
  inProject,
  // skills
  clientName,
}) {
  return (
    <SLol>
      <div className="second actor">
        <span className={`available ${inProject === 1 ? "ava1" : "ava0"}`}>
          {inProject}
        </span>
        <img className="actor-profile-img" src={picture} alt="actor" />

        <div className="actor-description-bk" />

        <div className="actor-description">
          <h1>{firstname}</h1>
          <h2>{lastname}</h2>
          <h3>{name}</h3>

          <h4>{types}</h4>

          <p>{mail}</p>
        </div>

        <div className="actor-date">
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
      </div>
    </SLol>
  );
}
Lol.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  jobs: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  inProject: PropTypes.number.isRequired,
  // skills: PropTypes.string.isRequired,
};
