
const btntodos = document.querySelector('.todos')
const btnensaladas = document.querySelector('.ensaladas')
const btnpastas = document.querySelector('.pastas')
const btnpizza = document.querySelector('.pizza')
const btnpostres = document.querySelector('.postres')
const contenedorPlatillos = document.querySelector('.platillos')




const platillos = ()=>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);
    
    const ensaladas = platillosArreglo.filter(ensala => ensala.getAttribute('data-platillo') === 'ensalada');

    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');

    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillo') === 'postres');

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);
}


const mostrarPlatillos = (ensaladas, pastas, pizza, postres, todos) =>{
    btnensaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    })

    btnpastas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));
    })

    btnpizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizza.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    })

    btnpostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    })
    btntodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo))
    })
}


const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

platillos();