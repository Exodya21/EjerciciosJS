/* 
1. Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra.
2. Desarrollar una función que escriba un Título h1 en el documento HTML.
3. Teniendo un cuadrado de color rojo en el documento de HTML:
Desarrollar una función que, al hacer click en él mismo, éste se transforme en un círculo de color verde
4. Teniendo un input de texto y un botón:
Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.
5. Desarrollar una función que dibuje una 'Card' de una película en el documento usando un objeto javascript como datos.
*/


// 1r ej

let listaDeCompra = ['manzana', 'pera', 'uva'];

let mostrarProductos = function (array) {
    array.forEach(element => {
        console.log(element)
    });
}

//mostrarProductos(listaDeCompra)

// 2n ej

let mostrarTitulo = function(string) {
    let localizacion = document.getElementById('title');

    let titular = `<h1>${string}</h1>`

    //localizacion.innerHTML = titular;

    document.getElementById('title').innerHTML = `<h1>${string}</h1>`;
}

mostrarTitulo('5 ejercicios de JS')

// 3r ej

//localizacion.addEventListener("click", transmutar());

function transmutar() {
    
    let localizacion = document.getElementById('formaGeometry');
    let removeClass = localizacion.classList.remove('cuadrado');
    let addClass = localizacion.classList.add('circulo');

    console.log(localizacion)
}


//4rt ej

function cambiarTitulo() {
    let localizacion = document.querySelector('#input');

    mostrarTitulo(localizacion.value)
}

//5to ej

let pelicula = [{
    name: 'Harry Potter y la Piedra filosofal',
    duration: '2h32min',
    year: 2001,
    type: 'Fantasia/Infantil',
    image: 'harry.jpg'
}];

function dibujarCard (arrayObj) {
    let localizacion = document.getElementById('card');
    let card= "";
    arrayObj.forEach(function (obj){
        card += `
            <img src= "${obj.image}" alt=${obj.nombre}> 
            <article>
                <p>${obj.name}</p>
                <p>${obj.duration}</p>
                <p>${obj.year}</p>
                <p>${obj.type}</p>
            </article>
            `;               
    });

    localizacion.innerHTML = card;
}
dibujarCard(pelicula);