/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import SFilter from "./style";

export default function Filter() {
  const [actors, setActors] = useState([]);
  const [projects, setProjects] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [work, setWork] = useState([]);
  const [lastName, setLastName] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/actor"}`)
      .then(({ data }) => {
        setActors(data);
        setLastName([...new Set(data.map((actor) => actor.lastname))]);
        setJobs([...new Set(data.map((actor) => actor.jobs))]);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/project"}`)
      .then(({ data }) => {
        setProjects(data);

        setWork([...new Set(data.map((project) => project.inProject))]);
      });
  }, []);

  return (
    <SFilter>
      <div>
        <section>
          <h1>FILTRE</h1>
          <select>
            {jobs.map((job) => (
              <option>{job}</option>
            ))}
          </select>
          <select>
            <option>Disponible</option>
            {work.map((project) => (
              <option>{project}</option>
            ))}
          </select>
          <select>
            <option>Trier par</option>
            {lastName.map((lastname) => (
              <option>{lastname}</option>
            ))}
          </select>
        </section>
      </div>
    </SFilter>
  );
}

// essayer un actor.jobs === développeur,....
