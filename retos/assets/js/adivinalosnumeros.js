function random (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
    //Math.random Numero aleatorio entre o y 1
    //Mat.floor te da el numero entero más cercano
}
let numeroSec =random (20, 40);
console.log(numeroSec);


function adivina () {
    let numeroObt = document.getElementById('numero');
    let numero1 = parseInt(numeroObt.value);
    console.log(numero1);
    let diferencia = Math.abs(numero1 - numeroSec);
    if (numero1 == numeroSec) {
        document.getElementById('resultado').innerHTML = `Felicidades, adivinaste el numero secreto`;
    } else if (diferencia <= 5) {
        document.getElementById('resultado').innerHTML = `Calienteeeeee`;
    } else if (diferencia <= 10) {
        document.getElementById('resultado').innerHTML = `Caliente`;
    } else if (diferencia <= 20) {
        document.getElementById('resultado').innerHTML = `Tibio`;
    } else if (diferencia <= 30) {
        document.getElementById('resultado').innerHTML = `Frio`;
    } else if (diferencia >= 30) {
        document.getElementById('resultado').innerHTML = `Congelado`;
    }
}