const searchButton = document.querySelector('#search_icon');

searchButton.addEventListener('click', () => {

    const products = document.querySelectorAll('.products');

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

            const resultContainer = document.querySelector('#result_container');
            const productsContainer = document.createElement('div');
            productsContainer.classList.add('result')
            productsContainer.classList.add('products')

            const TextContainer = document.createElement('div');
            TextContainer.classList.add('header_text');
            const equipmentText = document.createElement('p');

            equipmentText.classList.add('title');

            equipmentText.innerText = 'Pedidos de Vendas';

            TextContainer.appendChild(equipmentText);

            productsContainer.appendChild(TextContainer);

            const equipmentCount = document.createElement('p');

            let countEquipment = 0;
            
            const equipmentCountContainer = document.createElement('div');
            
            equipmentCountContainer.classList.add('number');
            equipmentCountContainer.appendChild(equipmentCount);
            TextContainer.appendChild(equipmentCountContainer);
            
            data.result.forEach(item => {
                
                if(item){
                    
                    if(item.EquipmentID){
                        
                        countEquipment++;
                        
                        let text = document.createElement('p');
                        text.innerText += item.EquipmentName
                        
                        const product = document.createElement('div');
                        const product_number = document.createElement('p')
                        const product_name = document.createElement('p');
                        const product_quantity = document.createElement('p');
                        
                        productsContainer.classList.add('result');
                        product.classList.add('product')
                        product_number.classList.add('product_number');
                        product_name.classList.add('product_name');
                        product_quantity.classList.add('product_quantity');
                        
                        product_number.innerText = '#' + item.EquipmentID;
                        product_name.innerText = item.EquipmentName;
                        product_quantity.innerText = 'Qtd: 200 pç'
                        
                        productsContainer.appendChild(product);
                        product.appendChild(product_number);
                        product.appendChild(product_name);
                        product.appendChild(product_quantity);
                        
                        resultContainer.appendChild(productsContainer)
                        
                        
                    }
                    equipmentCount.innerText = '(' + countEquipment + ' itens encontrados)';
                    
                    if(item.MaterialID){
                        
                        // text.innerText += item.MaterialName
                        // const productsContainer = document.querySelector('.products');
        
                        // const product = document.createElement('div');
                        // const product_number = document.createElement('p')
                        // const product_name = document.createElement('p');
                        // const product_quantity = document.createElement('p');
        
                        // productsContainer.classList.add('result');
                        // product.classList.add('product')
                        // product_number.classList.add('product_number');
                        // product_name.classList.add('product_name');
                        // product_quantity.classList.add('product_quantity');
        
                        // product_number.innerText = '#' + item.MaterialID;
                        // product_name.innerText = item.MaterialName;
                        // product_quantity.innerText = 'Qtd: 200 pç'
            
                        // productsContainer.appendChild(product);
                        // product.appendChild(product_number);
                        // product.appendChild(product_name);
                        // product.appendChild(product_quantity);
                    }

                    if(item.PurchaseOrderID){

                    }

                    if(item.SalesOrderID){
                        
                    }

                    if(item.WorkforceID){

                    }
                }
            });


        } else {
            console.log(data.message);
        }
    })

    .catch(error => {
        console.log('Requisiton Error: ', error)
    })
    
})