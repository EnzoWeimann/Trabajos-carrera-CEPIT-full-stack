"use strict"

const contenedor = document.getElementById("contenedor");
const urlApi = "https://fakestoreapi.com/products/";

fetch(urlApi)
    .then(respuesta => {return (respuesta.json())})
    .then(datos => {
        for (let i = 0; i < datos.length; i++) {
            contenedor.innerHTML += `
            <div id="prod${datos[i].id}">
                <img src="${datos[i].image}" alt="Imagen de producto ${datos[i].id}">
                <h3>${datos[i].title}</h3>
                <p>${datos[i].description.length > 100 ? datos[i].description.slice(0, 100) + "..." : datos[i].description}</p>
                <div class="comprar-div">
                    <h4>Price: $ ${datos[i].price}</h4>
                    <button>Comprar</button>
                </div>
            </div>
            `;
        }
        
    })
.catch(err => {
    console.log("Se ha producido un error: " + err)
})