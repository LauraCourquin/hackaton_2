import Card from "@components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import SCardList from "./style";

export default function CardList() {
  const [actors, setActors] = useState([]);
  // const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/actor"}`)
      .then(({ data }) => {
        setActors(data).then(() => {});
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}${"/project"}`)
  //     .then(({ data }) => {
  //       setProjects(data).then(() => {});
  //     });
  // }, []);
  return (
    <SCardList>
      {actors.map((actor) => {
        return (
          <Card
            key={actor.id}
            name={`${actor.firstname} ${actor.lastname}`}
            picture={actor.picture}
            skills={actor.skills}
            mail={actor.mail}
            jobs={actor.jobs}
            types={actor.types}
          />
        );
      })}
    </SCardList>
  );
}
