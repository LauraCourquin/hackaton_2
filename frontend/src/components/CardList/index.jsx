import Card from "@components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import SCardList from "./style";

export default function CardList() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/project/all"}`)
      .then(({ data }) => {
        setActors(data).then(() => {});
      });
  }, []);
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
            inProject={actor.inProject}
            jobName={actor.jobName}
            clientName={actor.clientName}
          />
        );
      })}
    </SCardList>
  );
}
