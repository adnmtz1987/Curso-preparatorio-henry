// var listaDeCompras = [];
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

// console.log(listaDeCompras.length);
//listaDeCompras[1];
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// var colores = ['amarillo', 'azul'];
// colores.push('rojo'); //agrega elemento al ultimo lugar de la lista
// colores.unshift('verde'); //agrega elemento al primer lugar de la lista
// colores.pop(); //elimina el ultimo elemento de la lista
// colores.shift(); //elimina el primer elemento de la lista
// console.log(colores);

// var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
// var incluyeDali = pintores.includes('Dali'); //var.include sirve para saber si la lista o array incluye un elemento en especifico
// console.log(incluyeDali);

// var numeros = [1, 6, 8, 9];
// var cumpleCondicion = numeros.every((num) => { //var.every retorna un booleano de si todos los elementos cumplen una condicion asiganada
//     return num > 5;
// });
// console.log(cumpleCondicion);

// var paralabra = 'Henri';
// var palabraSeparada = paralabra.split(''); //var.split sirve para separa los string y convertilos en items individuales
// palabraSeparada.pop('');
// palabraSeparada.push('y');
// // console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join(''); //var.join sirve para unir todos los elementos en un solo string
// console.log(palabraArreglada);

// var numeros = [1, 2, 3, 4];
// // numeros.forEach((num) => { //var.forEach sirve para imprimir cada item de la lista por separa o para buscar un item especifico en este caso cada item de la lista
// //     console.log(num)
// // })
// numeros.forEach(num => {
//     if(num === 3) {
//         console.log(num) //En este otro caso solo imprimira cada item de la lista siempre y cuando cumpla la condicion asignada === 3
//     }
// })

// var masUno = numeros.map(num => { //var.map permite realizar cambios en las listas o arrays
//     return num + 1
// })
// console.log(masUno);

// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// function encontrarLetraP(string){
//     var letras = string.split('');

//     for (let i = 0; i < letras.length; i++) {
//         if (letras[i] === 'p') {
//             console.log('Si contiene a P');
//         }
//     }
// }

// encontrarLetraP('JavaScript');
// encontrarLetraP('Henry');

// var arr = [];

// while (arr.length < 5){
//     arr.push('BOOM');
// }

// console.log(arr);

// var arr = [];
// var n = 1;

// while (n < 3){
//     arr.push(Math.random());
// }