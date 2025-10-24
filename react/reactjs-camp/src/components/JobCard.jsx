import { useEffect, useState } from "react";
import ApplyButton from "./ApplyButton";

const JobCard = ({ searchTerm, technology, location, experienceLevel }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : [data]))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const { titulo, empresa, ubicacion, descripcion, data } = job;

    const matchesSearch =
      titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      descripcion.toLowerCase().includes(searchTerm.toLowerCase());

    const techArray = Array.isArray(data.tecnologias)
        ? data.technology
        : typeof data?.technology === "string"
        ? [data.technology]
        : [];

    const matchesTech = technology
        ? techArray.some(
            (tech) => tech.toLowerCase() === technology.toLowerCase()
        )
        : true;

    const matchesLocation = location
      ? ubicacion?.toLowerCase() === location.toLowerCase()
      : true;

    const matchesExperience = experienceLevel
      ? data?.nivel?.toLowerCase() === experienceLevel.toLowerCase()
      : true;

    return matchesSearch && matchesTech && matchesLocation && matchesExperience;
  });

  return (
    <article>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className="job-listing-card">
            <div className="card-content">
              <h3>{job.titulo}</h3>
              <small>
                {job.empresa} - {job.ubicacion}
              </small>
              <p>{job.descripcion}</p>
            </div>
            <ApplyButton jobId={job.id} />
          </div>
        ))
      ) : (
        <p>No se encontraron empleos que coincidan con la búsqueda</p>
      )}
    </article>
  );
};

export default JobCard;
