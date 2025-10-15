const jobsListingSection = document.querySelector('.job-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const jobs = document.querySelectorAll('.job-listing-card')

filter.addEventListener('change', function() {

  const selectedValue = filter.value
   // console.log(filter.value)
   if(selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
   } else {
    mensaje.textContent = ''
   }

   jobs.forEach(job => {
   // console.log(job.dataset.modalidad)
   //const modalidad = job.dataset.modalidad
   const modalidad = job.getAttribute('data-modalidad')

   if(selectedValue === '' || selectedValue === modalidad) {
    job.style.display = 'flex'
   } else {
    job.style.display = 'none'
   }
  })
});



/*const searchInput = document.querySelector('#empleos-search-input')

searchInput.addEventListener('input', function() {
  console.log(searchInput.value)
});

searchInput.addEventListener('blur', function() {
  console.log('Se dispara cuando el campo pierde el foco');
});

const searchForm = document.querySelector('#empleos-search-form')

searchForm.addEventListener('submit', function(event) {
  event.preventDefault() // Evita el envío del formulario
  console.log('submit')
})

document.addEventListener('keydown', function(event) {

})*/