/*un objeto es un  elemento que tiene propiedades mejor conocidos como atributos y tienen metodos, los metodos son funciones, las funciones son acciones que modifican el elemnto o objeto que tenemos  */

let cadena1 = 'hola';

console.log(cadena1);

let cadena2 = new String('Adios');
console.log(cadena2);

let arreglo = new Array();
console.log(arreglo)

console.log(cadena2.toLowerCase().includes('a'))

//cohersi[on y conversi[on 
//convienrte un tipo de dato a otro 

console.log(cadena1.toLocaleLowerCase());

/*Funcion que recibe una palabra y la regreza invertida */
//split convierte un string en arreglo

let palabra = 'Hola mundo';
let arregl = palabra.split('');
console.log(arregl);

console.log(arregl.reverse);

function invertirPalabra(cadena){
    let arreglo = cadena.split('');// se esta convirtiendo la cadena en un arreglo.
    arreglo.reverse();// invirtiendo el arreglo
    let cadenaInvertida = arreglo.join('');
    return console.log(cadenaInvertida);
};

invertirPalabra(document.write()prompt("ingrese una palabra:"))

