import { state } from './config.js'

state.count++

//console.log(state)

const filterLocation = document.querySelector('#filter-location')
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
});

