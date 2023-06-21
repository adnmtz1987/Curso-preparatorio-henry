class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar (){
        console.log("Hola, mi nombre es " + this.nombre + ". Tengo " + this.edad+".");
    }
}

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear(){
        console.log("Soy " + this.nombre + ". Codeo desde hace " + this.añosDeExperiencia + " años.");
    }
}

var Marianela = new Persona("Marianela", 40);
var Adrian = new Programador("Adrian", 35, 2);
// Marianela.saludar();
// Adrian.codear();
Adrian.saludar();