import Card from "@components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import SCardList from "./style";

export default function CardList() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/actor"}`)
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
            img={actor.picture}
            skills={actor.skills}
            email={actor.mail}
            job={actor.jobs}
            type={actor.type}
          />
        );
      })}
    </SCardList>
  );
}
