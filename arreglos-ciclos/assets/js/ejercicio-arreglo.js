/* Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio. */



let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20];
let total=0;
/* for(let i of numeros) total+=i; resultado del probleba con */

for(let i = 0; i < numeros.length; i++){ 
    total += numeros[i];
}
let promedio = total/20;
document.write(`El resultado de la suma es  + ${total} y el promedio es ${promedio}`)