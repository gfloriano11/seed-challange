const searchButton = document.querySelector('#search_icon');

searchButton.addEventListener('click', () => {
    
    const prompt = document.querySelector('#search').value;

    fetch('../app/?controller=search', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            prompt: prompt
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            console.log(data.message);
        } else {
            console.log(data.message);
        }
    })
    .catch(error => {
        console.log('Requisiton Error: ', error)
    })
    
})