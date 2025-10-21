const searchButton = document.querySelector('#search-btn');


searchButton.addEventListener('click', (e) => {
    const searchInput = document.querySelector('#search-input');
    if(searchInput) {
        const query = searchInput.value
        console.log("Buscando...", query);
    }
    e.preventDefault();
})

