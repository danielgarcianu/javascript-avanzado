

let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];

/* numeros.forEach(function (elemento, indice ) {
    document.write(elemento + '-' + indice + '<br>')
}); */

//por dentro tiene una funci[on an[onima solo existe dentro del for each fuera de for each no se puede llamar con este no necesitamos de indicarle cuando va a parar, el indice es la posici[on]

//funciones de flecha an[onimas 
/* numeros.forEach( elemento => {
    document.write(elemento + '-' + indice + '<br>')
}); */

//solo funciona con un elemento

//for each recorre todos los elementos de un arreglo
numeros.forEach(function (elemento){
    document.write(elemento + ', ');
})


//map crea un arreglo partiendo de otro arreglo
let numeros2 = numeros.map(function(elemento){
    return elemento * 2;
});

document.write('<br>' + numeros2);

/* let frutas = ['mango', 'uva', 'manzana'];
 let frutas2 = frutas;
 
 document.write('<br>' + frutas + '<br>')
 document.write('<br>' + frutas2 + '<br>')

 frutas2.push('pera')
 document.write('<br>' + frutas + '<br>')
 document.write('<br>' + frutas2 + '<br>')
 */

 //el codigo de arriba modifica frutas 1 y 2 


 //el codigo de abajo solo modifica frutas 2 
 
let frutas = ['mango', 'uva', 'manzana'];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write('<br>' + frutas + '<br>')
document.write('<br>' + frutas2 + '<br>')

frutas2.push('pera')
document.write('<br>' + frutas + '<br>')
document.write('<br>' + frutas2 + '<br>')


/*Includes  verifica si un elemento se encuentra dentro de un arreglo */
document.write('<br>' + numeros.includes(328) + '<br>');

/*FILTER filtra los elementos devuelve un nuevo arreglo sin los elementos filtrados  */

let numerosPares = numeros.filter((elemento) =>{

    if(elemento % 2 == 0){
        return true;

    } else {
        return false;
    }
    
    
    /* return elemento % 2 == 0;  este codigo es la versi[on abreviado del if statement de arriba*/
    
});

document.write('<br>' + numerosPares + "<br>");

/*si invertimos true y false en el codigo de arriba imprime solo elementos impares  */



let fruits = ['mango', 'uva', 'manzana', 'mandarina', 'naranja', 'papaya'];

let frutasFiltro = fruits.filter((fruta) =>{
    /* if(fruta.includes('i') ==true){
        return true;  }*/
   
        return fruta.includes('i');
    
})

document.write('<br>' + frutasFiltro + '<br>');
//contains arriba busca si la letra i esta incluida dentro de la cadena
/*SORT */

let otrosNumeros = [9,2,3,5,1,4,8,6,7];
document.write('<br>' + otrosNumeros.sort() + '<br>');


//REVERSE invierte el orden de los elementos de un arreglo 
document.write('<br>' + numeros.reverse() + '<br>')

//FIND solo devuealve un elemento el primero del arreglo que cumple con la funcion

let frutaEncontrada = frutas.find((elemento) =>{
    return elemento.includes('ma');
});
document.write('<br>' + frutaEncontrada + '<br>')