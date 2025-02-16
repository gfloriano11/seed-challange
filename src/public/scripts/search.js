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
        console.log(data)
        if(data.success){
            console.log(data.message);
            
            data.equipments.forEach(equipment => {
                let text = document.createElement('p');
                text.innerText += equipment.EquipmentName
                const body = document.querySelector('body');
    
                body.appendChild(text);
            })

        } else {
            console.log(data.message);
        }
    })
    .catch(error => {
        console.log('Requisiton Error: ', error)
    })
    
})