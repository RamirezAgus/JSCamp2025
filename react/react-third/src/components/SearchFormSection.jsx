import { useId, useRef } from "react";
import { useSearchForm } from "../hooks/useSearchForm";

//let timeoutId = null;

export function SearchFormSection({ initialFilters, onTextFilter, onSearch, initialText }) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();
  const idContractType = useId();

  const inputRef = useRef();

  const { handleSubmit, handleTextChange } = useSearchForm({
    idTechnology,
    idLocation,
    idExperienceLevel,
    idContractType,
    idText,
    onSearch,
    onTextFilter,
  });

  const handleClearText = (event) => {
    event.preventDefault();

    inputRef.current.value = "";
    onTextFilter("");
  }
  

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form onChange={handleSubmit} id="empleos-search-form" role="search">
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
            ref={inputRef}
            name={idText}
            id="empleos-search-input"
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleTextChange}
            defaultValue={initialText}
          />
          <button onClick={handleClearText}>
            ✖︎
          </button>
        </div>

        <div className="search-filters">
          <select name={idTechnology} id="filter-technology" defaultValue={initialFilters.technology}>
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="node">Node.js</option>
            </optgroup>
            <hr />
            <optgroup label="Frontend">
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
            </optgroup>
            <hr />
            <optgroup label="Backend">
              <option value="nodejs">Node.js</option>
              <option value="python">Python</option>
              <option value="express">Express</option>
              <option value="microservices">Microservicios</option>
              <option value="php">PHP</option>
            </optgroup>
            <hr />
            <optgroup label="Software">
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="c">C</option>
              <option value="c++">C++</option>
              <option value="ruby">Ruby</option>
            </optgroup>
            <hr/>
            <optgroup label="Base de datos">
              <option value="sql">SQL</option>
              <option value="postgresql">PostgreSQL</option>
              <option value="mysql">MySQL</option>
              <option value="mongodb">MongoDB</option>
            </optgroup>
          </select>

          <select name={idLocation} id="filter-location" defaultValue={initialFilters.location}>
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
          </select>

          <select name={idExperienceLevel} id="filter-experience-level" defaultValue={initialFilters.experienceLevel}>
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
          <select name={idContractType} id="filter-contract-type" defaultValue={initialFilters.contractType}>
            <option value="">Contrato</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="freelance">Freelance</option>
            <option value="intership">Prácticas</option>
          </select>
        </div>
      </form>

      <span id="filter-selected-value"></span>
    </section>
  );
}
