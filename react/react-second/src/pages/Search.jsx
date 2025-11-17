import { Pagination } from "../components/Pagination";
import { SearchFormSection } from "../components/SearchFormSection";
import { JobListing } from "../components/JobListing";

import { useFilters } from "../hooks/useFilters";

const RESULTS_PER_PAGE = 4;



export function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
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
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />

      <section>
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
