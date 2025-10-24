import { useState } from "react";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const JobSearch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [technology, setTechnology] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  return (
    <main>
      <section className="job-search">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <form role="search" id="empleos-search-form">
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              id="empleos-search-input"
              required
              type="text"
              placeholder="Buscar trabajos, empresas o habilidades"
              aria-label="Buscar trabajos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="search-filters">
            <select name="technology" 
            id="filter-technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            >
              <option value="">Tecnología</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="c">C</option>
              <option value="c++">C++</option>
              <option value="ruby">Ruby</option>
              <option value="php">PHP</option>
              <option value="mobile">Mobile</option>
            </select>

            <select name="location" 
            id="filter-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Ubicación</option>
              <option value="remoto">Remoto</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="monterrey">Monterrey</option>
              <option value="barcelona">Barcelona</option>
            </select>

            <select name="experience-level" 
            id="filter-experience-level"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
              >
              <option value="">Nivel de experiencia</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>
        </form>
        <span id="filter-selected-value"></span>
      </section>
      <section>
        <h2>Resultados de la búsqueda</h2>
        <div className="job-listings">
          {/* Pasamos los filtros por Props*/}
          <JobCard 
            searchTerm={searchTerm}
            technology={technology}
            location={location}
            experienceLevel={experienceLevel}
          />
        </div>
        <Pagination />
      </section>
    </main>
    
  );
};

export default JobSearch;
