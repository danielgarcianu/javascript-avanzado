/* const numero = []; es igual a el de abajo ambos son arreglos */

let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];
document.write(numeros[5]);

//estructura para imprimir todos los elementos 

for(let i = 0; i < numeros.length; i++){
    document.write(`${numeros[i]} <br>`) //solucion uno 
   /* const numero = numeros[i];
   document.write(numero + '<br>')  */


}

//primer parte de variable que vamos a inicializar segunda parte la condici[on que se va a cumplir 

//si quiero que sume de dos en dos = i+2 si quiero que vaya de tres en tres i+3 

/*ciclo for   inicia por la declaracion de la variable  luego ejecuta el codigo  es decir imprimir i =0 luego hace la comprobacion si i es ,emor  a numeros.length en este caso 11 entonces imprime i+1  y vuelve a hacer la comprovaci[on hasta que se cumple la condici[on*/