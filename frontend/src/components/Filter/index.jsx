import SFilter from "./style";
// import axios from "axios";

export default function Filter() {
  return (
    // const filterData

    //   const hSubmit = (evt) => {
    //     evt.preventDefault();
    //     axios
    //       .post("http://localhost:5000/contact", formData)
    //       .then(() => {
    //         toast("Message envoyé!");
    //       })
    //       .catch(() => {
    //         toast.error(
    //           "Un problème est survenue, merci de réessayer ultérieurement "
    //         );
    //       });
    //   };

    <SFilter>
      <div>
        <section>
          <h1>FILTRE</h1>
          {/* <input type="search" id="site-search" />
          {acteurs
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
            ))} */}
        </section>
      </div>
    </SFilter>
  );
}
// Récupérer du back : job, disponible
// CREATE TABLE `acteur` (
//   `jobs` varchar(45) DEFAULT NULL,
//   `types` enum('client','collaborateur','prestateur externe','intervenant')
// table project => in project
