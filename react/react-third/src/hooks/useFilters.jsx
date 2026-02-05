import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

export const useFilters = (RESULTS_PER_PAGE = 4) => {

    const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState (() =>{
    return {
      technology: searchParams.get('technology') || '',
      location: searchParams.get('location') || '',
      experienceLevel: searchParams.get('experienceLevel') || '',
      contractType: searchParams.get('contractType') || '',
    }
  })

  const [textToFilter, setTextToFilter] = useState(() => searchParams.get('text') || '');
  const [currentPage, setCurrentPage] = useState(() => {
    const page = Number(searchParams.get('page'))
    return Number.isNaN(page) ? page : 1
  });

  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (textToFilter) params.append("text", textToFilter);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.location) params.append("type", filters.location);
        if (filters.experienceLevel)
          params.append("level", filters.experienceLevel);
        if (filters.contractType) params.append("contract-type", filters.contractType);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        params.append("limit", RESULTS_PER_PAGE);
        params.append("offset", offset);

        const queryParams = params.toString();

        const response = await fetch(
          `http://localhost:1234/jobs?${queryParams}`
        );
        const json = await response.json();

        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, [filters, textToFilter, currentPage, RESULTS_PER_PAGE]);

  useEffect(() => {
    setSearchParams(() => {
      // Clear all existing params
      const params = new URLSearchParams();
      // Add only needed params
      if (textToFilter) params.set('text', textToFilter)
      if (filters.technology) params.set('technology', filters.technology)
      if (filters.location) params.set('type', filters.location)
      if (filters.experienceLevel) params.set('level', filters.experienceLevel)
      if( filters.contractType) params.set('contract-type', filters.contractType)

      if(currentPage > 1) params.set('page', currentPage)

      return params;
    })
  }, [filters, currentPage, textToFilter, setSearchParams])

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter,
    filters,
  };
};