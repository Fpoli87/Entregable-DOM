

//Nombre usuario!

let nombre = prompt("Hola! Como te llamas?").toUpperCase();


while (true) {
    if (nombre == null || nombre == "" || !isNaN(nombre)) {
        nombre = prompt("Nombre no válido. Ingrese su nombre, por favor.");
        continue;
    } else {
        break;
    }
}

let tituloSaludo = document.getElementById("titulo-revisar")

tituloSaludo.innerText = "Hola, " + nombre + ". Revisa el listado de nuestros animales disponibles!";


// Cuantos animales tiene disponibles de trabajo.
let cantidadAnimales = parseInt(prompt("Cuentame " + nombre + ", cuantos animales tienes en tu granja? "));

while (true) {
    if (cantidadAnimales == null || cantidadAnimales == "" || isNaN(cantidadAnimales)) {
        cantidadAnimales = parseInt(prompt("Número no válido. Ingrese la cantidad de animales, por favor."));
        continue;
    } else {
        break;
    }
}

//Formacion de los objetos y sus propiedades dentro del array

let AnimalesGranja = []

class Animal {
    constructor(id, tipo, nombre, color, sonido) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.color = color;
        this.sonido = sonido;
    }

    hablar() {
        console.log(this.nombre + " dice:  " + this.sonido);
    }

    saltar() {
        console.log(this.nombre + " ha saltado!");
    }

    dormir() {
        console.log(this.nombre + " tiene sueño. Es hora de ir a dormir.");
    }

    comer() {
        console.log(this.nombre + " es hora de comer...otra vez!");
    }
}

//formacion del array dependiendo las necesidades del usuario

for (i = 0; i < cantidadAnimales; i++) {
    animales = new Animal(
        idanimal = (i+1),
        tipoanimal = prompt("Ingrese tipo de animal"),
        nombreanimal = prompt("Ingrese Nombre animal"),
        clranimal = prompt("Ingrese Color del animal"),
        sonidoanimal = prompt("Ingrese tipo de sonido que hace"));
    while (true) {
        if (tipoanimal == null || tipoanimal == "" || !isNaN(tipoanimal)) {
            tipoanimal = prompt("Tipo no válido. Ingrese el tipo, por favor.");
            continue;
        } else if (nombreanimal == null || nombreanimal == "" || !isNaN(nombreanimal)) {
            nombreanimal = prompt("Nombre no válido. Ingrese el nombre, por favor.");
            continue;
        } else if (clranimal == null || clranimal == "" || !isNaN(clranimal)) {
            clranimal = prompt("Color no válido. Ingrese el color, por favor.");
            continue;
        } else if (sonidoanimal == null || sonidoanimal == "" || !isNaN(sonidoanimal)) {
            sonidoanimal = prompt("Sonido no válido. Ingreselo correctamente, por favor.");
            continue;
        } else {
            AnimalesGranja.push(animales)
            break;
        }
    }
}


console.log(AnimalesGranja)

//ingreso de los datos a filtrar dependiendo necesidades del usuario

let datoAnimal = prompt("Que dato deseas buscar? Tipo / Nombre / Color / Sonido").toLowerCase();

while (true) {
    if (datoAnimal == null || datoAnimal == "" || !isNaN(datoAnimal)) {
        datoAnimal = prompt("Ingrese solo una de las siguientes opciones Tipo / Nombre / Color / Sonido");
        continue;
    } else if (datoAnimal != "tipo" && datoAnimal != "nombre" && datoAnimal != "color" && datoAnimal != "sonido"){
        busquedaAnimal = prompt("Ingrese solo una de las siguientes opciones Tipo / Nombre / Color / Sonido");
        break;
    } else if (datoAnimal == "tipo" && datoAnimal != "nombre" && datoAnimal != "color" && datoAnimal != "sonido"){
        busquedaAnimal = prompt("Que tipo de animal desea buscar?");
        break;
    } else if (datoAnimal != "tipo" && datoAnimal == "nombre" && datoAnimal != "color" && datoAnimal != "sonido"){
        busquedaAnimal = prompt("Que nombre de animal desea buscar?");
        break;
    } else if (datoAnimal != "tipo" && datoAnimal != "nombre" && datoAnimal == "color" && datoAnimal != "sonido"){
        busquedaAnimal = prompt("Que color de animal desea buscar?");
        break;
    } else if (datoAnimal != "tipo" && datoAnimal != "nombre" && datoAnimal != "color" && datoAnimal == "sonido"){
        busquedaAnimal = prompt("Que sonido de animal desea buscar?");
        break;
    } else if (busquedaAnimal == null || busquedaAnimal == "" || !isNaN(busquedaAnimal)) {
        alert("Ingreso no válido. Vuelva a ingresar");
        continue;
    } else {
        break;
    }
}
debugger
//|| datoAnimal != "tipo" || datoAnimal != "nombre" || datoAnimal != "color" || datoAnimal != "sonido")
//procesamiento de la informacion y aplicacion del filtro

if (datoAnimal == "tipo" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.tipo == busquedaAnimal)
    console.log(ResultadoBusqueda)
} else if (datoAnimal == "nombre" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.nombre == busquedaAnimal)
    console.log(ResultadoBusqueda)
} else if (datoAnimal == "color" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.color == busquedaAnimal)
    console.log(ResultadoBusqueda)
} else if (datoAnimal == "sonido" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.sonido == busquedaAnimal)
    console.log(ResultadoBusqueda)
}

let listadoDisponible = document.getElementById("listadoDisponible")

AnimalesGranja.forEach(animalesenArray => {
    listadoDisponible.innerHTML += `
    <div class="card animalListado m-3" id="animalListado${animalesenArray.id}">
        <div class="card-body">
            <h5 class="card-title">${animalesenArray.nombre}</h5>
            <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
            <p class="card-text">Color: ${animalesenArray.color}</p>
            <p class="card-text">Saludo: ${animalesenArray.sonido}</p>
        </div>
    </div>
    `
})
