import SFilter from "./style";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function Filter() {
  // const [filtre, setFiltre] = useState;

  // useEffect(() => {
  //   axios.get("http://localhost:5000/actor").then(({ data }) => {
  //     setFiltre(data);
  //   });
  // }, []);
  // const [actors, setActors] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}${"/actor"}`)
  //     .then(({ data }) => {
  //       setActors(data).then(() => {});
  //     });
  // }, []);

  return (
    <SFilter>
      <div>
        <section>
          <h1>FILTRE</h1>
          {
            <input type="search" id="site-search" />
            /* {acteurs
            .filter((acteur) => acteurs.type.includes("vibe"))
            .map((acteurs) => (
              <input
              name={acteurs.job}
                type="image"
                src={acteurs.picture}
                alt={acteurs.alt}
                onClick={(event) => {
                  filterData(event);
                }}
                />
            ))} */
          }
        </section>
      </div>
    </SFilter>
  );
}
// Récupérer du back :
// table actor => jobs
// table project => inProject http://localhost:5000/project
