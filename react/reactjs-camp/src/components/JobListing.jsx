import JobCard from "./JobCard";

const JobListing = ({ jobs }) => {
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      {jobs.length == 0 ? (
        <p>No hay trabajos disponibles.</p>
      ) : (
        <div className="job-listings">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </>
  );
};

export default JobListing;
