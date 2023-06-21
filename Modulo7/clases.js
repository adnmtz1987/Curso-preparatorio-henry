// FUNCIÓN CONSTRUCTORA

function Auto(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.informacion = function(){
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miPrimerAuto = new Auto(3, 'Plateado', 'Peugeot', 2009, 4)

miPrimerAuto.informacion();

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// EXPRESIÓN DE CLASE

class Autos{
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informaciones(){
        console.log("Este es un " + this.marca + " de color " + this.color);
    }
}

var miSegundoAuto = new Autos(5, "Plateado", "Volkswagen", 2019, 4)


console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
miSegundoAuto.informaciones();
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//METODOS


class Football{
    constructor(jugador){
        this.jugador = jugador;
    }
    obtenerNombre(){
        console.log(this.jugador);
    }
}

var Argentina = new Football("Messi");
var Brasil = new Football("Pele");

Argentina.obtenerNombre();
Brasil.obtenerNombre();