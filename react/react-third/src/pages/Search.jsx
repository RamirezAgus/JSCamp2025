import { Pagination } from "../components/Pagination";
import { SearchFormSection } from "../components/SearchFormSection";
import { JobListing } from "../components/JobListing";

import { useFilters } from "../hooks/useFilters";

import styles from './Search.module.css';

const RESULTS_PER_PAGE = 4;



export default function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  } = useFilters(RESULTS_PER_PAGE);

  const title = loading
    ? `Cargando... - DevJobs`
    : `Resultados: ${total}, Pagina ${currentPage} - DevJobs`;

  return (
    <main>
      <title>{title}</title>
      <meta
        name="description"
        content="Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo empleo en DevJobs."
      />

      <SearchFormSection
        initialText={textToFilter}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />

      <section className={styles.searchResults}>
        <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>

        {loading ? <p>Cargando empleos...</p> : <JobListing jobs={jobs} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
