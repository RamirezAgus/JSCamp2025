import { state } from "./config.js";

state.count++;

//console.log(state)

const filterLocation = document.querySelector("#filter-location");
const filterTech = document.querySelector("#filter-technology");
const filterLevel = document.querySelector("#filter-experience-level");

const mensaje = document.querySelector("#filter-selected-value");

function applyAllFilters() {
  const jobs = document.querySelectorAll(".job-listing-card");

  const selectedLocation = filterLocation.value;
  const selectedTech = filterTech.value;
  const selectedLevel = filterLevel.value;

  const activeFilters = [];

  if (selectedLocation) activeFilters.push(`Ubicación: ${selectedLocation}`);
  if (selectedTech) activeFilters.push(`Tecnología: ${selectedTech}`);
  if (selectedLevel) activeFilters.push(`Nivel: ${selectedLevel}`);

  mensaje.textContent =
    activeFilters.length > 0
      ? `Filtros activos - ${activeFilters.join(", ")}`
      : "";

  jobs.forEach((job) => {
    const modalidad = job.getAttribute("data-modalidad");
    const tecnologia = job.getAttribute("data-technology");
    const nivel = job.getAttribute("data-nivel");

    const locationMatch =
      selectedLocation === "" || selectedLocation === modalidad;
    const technologyMatch = selectedTech === "" || selectedTech === tecnologia;
    const levelMatch = selectedLevel === "" || selectedLevel === nivel;
    const isShown = locationMatch && technologyMatch && levelMatch;
    job.classList.toggle("is-hidden", !isShown);
    job.classList.toggle("is-shown", isShown);
  });
}

filterLocation.addEventListener("change", applyAllFilters);
filterTech.addEventListener("change", applyAllFilters);
filterLevel.addEventListener("change", applyAllFilters);

/*const filterLocation = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const filterTech = document.querySelector('#filter-technology')
const filterLevel = document.querySelector('#filter-experience-level')

filterTech.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filterTech.value.toLowerCase()
  if(selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {

    const dataAttr = job.getAttribute('data-technology')
    let technologies = []


    try {
      technologies = JSON.parse(dataAttr)
    } catch {
      technologies = dataAttr?.split(',').map(t => t.trim().toLowerCase()) || []
    }

    const isShown = selectedValue === '' || technologies.includes(selectedValue)
    job.classList.toggle('is-hidden', !isShown)
  })
});
 

filterLocation.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filterLocation.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
});

filterLevel.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filterLevel.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    const nivel = job.getAttribute('data-nivel')
    const isShown = selectedValue === '' || selectedValue === nivel
    job.classList.toggle('is-hidden', isShown === false)
  })
});*/
