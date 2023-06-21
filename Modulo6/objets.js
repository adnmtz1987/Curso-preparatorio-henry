var deportes = {
    conBalon: ["Futbol", "Basquet", "Rugby"],
    sinBalon: ["Boxeo", "Surf", "Trakking"] 
};

var persona = {
    nombre: "Adrian",
    edad: 35,
    estudios: {esProgramado: true}
}

//console.log(persona.nombre);
//console.log(persona.edad);

var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
//console.log(autos.marcas);
delete autos.marcas;
//console.log(autos);

var misFunciones = {
    saludar: function(){
        console.log("Hola");
    },
};

// misFunciones.saludar();

var atuendos = {
    manos: ['Guantes', 'Anillos'],
    pies: ['Zapatos', 'Soquetes'],
};

//console.log(atuendos.manos);

atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

var comidas = {};
var diferenciaDeNotacione = function(propUno, propDos){
    comidas[propUno] = ["Frutas", "Vegetales"],
    comidas[propDos] = ["Hamburguesas", "Papas Fritas"]
};

diferenciaDeNotacione("Saludable", "noSaludable");
// console.log(comidas);

var libro = { autor: "Borges", genero: "Policial", año: 1990};
var tienePropiedad = libro.hasOwnProperty('autor')
console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

var mundo = {cotinentes: 7, paises: 195, oceanos: 5};
for(var prop in mundo){
    // console.log("Esta es la propiedad: " + prop);
    // console.log("Este es el valor: " + mundo[prop]);
}


var mascota = {
    animal: "Perro",
    raza: "Pitbull",
    amistoso: true,
    dueño: "Adrian Martinez",
    info: function(){
        console.log("Mi perro es un " + this.raza);
    }
};
// mascota.info();