/* arrow function
   función de flecha 
    diferent way to declarate functions 


*/

/* function add (number1,number2){
    //operations or code to ejecute
    return number1 + number2;

} */

const add = (number1,number2) => {
    return number1 + number2;
}

let number1 = parseInt(prompt('numero 1'));
let number2 = parseInt(prompt('numero 2'));
let suma = add(number1, number2);

document.write(`la suma de ${number1} y ${number2} es ${suma} <br>`);

/*
both functions are the same the arrow function is the trending way to declare a function it is commun to use in framworks 
it has to be declarated before call it




*/