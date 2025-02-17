const searchButton = document.querySelector('#search_icon');

searchButton.addEventListener('click', () => {

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.remove();
    })
    
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
                const products_container = document.querySelector('.products');

                const product = document.createElement('div');
                const product_number = document.createElement('p')
                const product_name = document.createElement('p');
                const product_quantity = document.createElement('p');

                products_container.classList.add('result');
                product.classList.add('product')
                product_number.classList.add('product_number');
                product_name.classList.add('product_name');
                product_quantity.classList.add('product_quantity');

                product_number.innerText = '#' + equipment.EquipmentID;
                product_name.innerText = equipment.EquipmentName;
                product_quantity.innerText = 'Qtd: 200 pç'
    
                products_container.appendChild(product);
                product.appendChild(product_number);
                product.appendChild(product_name);
                product.appendChild(product_quantity);
            })

        } else {
            console.log(data.message);
        }
    })
    .catch(error => {
        console.log('Requisiton Error: ', error)
    })
    
})