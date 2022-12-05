const imagenes = document.querySelectorAll('img');


const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    })
});

imagenes.forEach(imagen =>{
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
})




