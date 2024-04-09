//console.log("Gatardo")

async function respuesta() {
    var response = await fetch('https://fakestoreapi.com/products');
//    .then(res=>res.json());
    //.then(json=>console.log(json));

    var object = await response.json();
    //console.log(object);
    return object;
};

// const productos = respuesta();

// const json = JSON.stringify(productos);

// console.log(typeof(json))
// console.log(json)

// var contenedor = document.getElementById("muestra");
// var elementoNuevo = document.createElement("div");
// elementoNuevo.innerHTML = json;
// contenedor.appendChild(elementoNuevo);

async function crearElemento(){
     
        const productos = await respuesta();
        var contenedor = document.getElementById("muestra");
        // var elementoNuevo = document.createElement("div");
        // elementoNuevo.innerHTML=`<p>coso: ${JSON.stringify(productos, null, 2)}</p>`;
        // contenedor.appendChild(elementoNuevo);
        productos.forEach(producto => {
            var elementoNuevo = document.createElement("div");
            elementoNuevo.classList.add('col-md-3'); // Utiliza Bootstrap para dividir en 4 columnas
            elementoNuevo.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${producto.image}" alt="${producto.title}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">Precio: ${producto.price}</p>
                        <p class="card-text">Categoría: ${producto.category}</p>
                    </div>
                </div>
            `;
            contenedor.appendChild(elementoNuevo);
        
        });
        
 }
crearElemento();
//document.addEventListener('DOMContentLoaded', crearElemento);