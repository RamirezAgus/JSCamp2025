import { useId, useState } from "react";

import Pagination from "../components/Pagination";
import JobListing from "../components/JobListing";

import jobsdata from "../data.json";

const RESULT_PER_PAGE = 5;

const JobSearch = () => {
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });

  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  // Filtrado por selects
  const jobsFilteredByFilters = jobsdata.filter((job) => {
    return (
      (filters.technology === "" ||
        job.data.technology === filters.technology) &&
      (filters.location === "" || job.data.location === filters.location) &&
      (filters.experienceLevel === "" ||
        job.data.experienceLevel === filters.experienceLevel)
    );
  });

  // Filtrado por texto
  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) =>
          job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
        );

  // Paginación
  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULT_PER_PAGE);
  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );

  // Cambiar página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newFilters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    };

    setFilters(newFilters);
    setCurrentPage(1);
  };

  //  Buscar por texto
  const handleTextToFilter = (event) => {
    const newText = event.target.value;
    setTextToFilter(newText);
    setCurrentPage(1);
  };

  

  return (
    <main>
      <section className="job-search">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora miles de oportunidades en el sector tecnológico.</p>
        <form onSubmit={handleSearch} role="search" id="empleos-search-form">
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
              name={idText}
              value={textToFilter}
              onChange={handleTextToFilter}
              id="empleos-search-input"
              type="text"
              placeholder="Buscar trabajos, empresas o habilidades"
              aria-label="Buscar trabajos..."
            />
            <button
              type="submit"
              style={{ position: "absolute", right: "4px" }}
            >
              Buscar
            </button>
          </div>

          <div className="search-filters">
            <select name={idTechnology} id="filter-technology">
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

            <select name={idLocation} id="filter-location">
              <option value="">Ubicación</option>
              <option value="remoto">Remoto</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="monterrey">Monterrey</option>
              <option value="barcelona">Barcelona</option>
            </select>

            <select name={idExperienceLevel} id="filter-experience-level">
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
        <JobListing jobs={pagedResults} />
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default JobSearch;
