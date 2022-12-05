const boton = document.querySelector('.hamburguesa')
const navegacion = document.querySelector('.navegacion')
const cerrar = document.querySelector('.cerrar')


boton.addEventListener('click', ()=>{
    navegacion.classList.toggle('spread')
})

cerrar.addEventListener('click', ()=>{
    navegacion.classList.toggle('spread')
})