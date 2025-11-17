import { useState, useRef } from "react";

export const useSearchForm = ({
  idTechnology,
  idLocation,
  idExperienceLevel,
  idText,
  onSearch,
  onTextFilter,
}) => {
  const [searchText, setSearchText] = useState("");
  const timeoutId = useRef(null); // usar useRef en lugar de una variable global.

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (event.target.name === idText) {
      return; // ya lo manejamos en onChange
    }

    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    };

    onSearch(filters);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setSearchText(text); // actualizamos el input inmediatamente

    // Debounce: Cancelar el timeout anterior
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      onTextFilter(text);
    }, 500);
  };

  return {
    searchText,
    handleSubmit,
    handleTextChange,
  };
};