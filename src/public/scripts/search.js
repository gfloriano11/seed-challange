const searchButton = document.querySelector('#search_icon');

searchButton.addEventListener('click', () => {

    const loadText = document.createElement('p');

    loadText.innerText = 'Buscando...';

    const loadContainer = document.querySelector('#load_text');  

    loadContainer.appendChild(loadText);

    fetch('dev-challange/src/app/');
})