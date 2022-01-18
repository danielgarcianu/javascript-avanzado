/* Operadores aritmm[eticos +,-,*,?,% este ultimo es el modulo nos da el residuo */

let operacion = 3 * 5 + (10-5);
console.log (operacion);

let operacion2 = 3 - 5 / 2*4
console.log(operacion2);

/*Operadores relacionales  */

//<,>, >=, <=, ==, ===, !=, !==
//devuelven false or true 

console.log(7 < 7); // no estamos incluyendo el numero a comparar 
console.log(7 <= 7);// incluimos el nomero a comparar

console.log(7 == "7");// devuelve true por que compara le valor no el tipo de dato 
console.log(7 === 7); // compara calor y tipo de dato 
console.log(1 != '7');// falso 
console.log(1 !== "7");// verdadero 


/*incremento decremento  */
//+=, -+, *=, /=


let incremento = 5;

incremento += 5;// incremento = incremento + 5
console.log(incremento)

incremento -= 5;
console.log(incremento);

incremento *= 5;
console.log(incremento);

incremento /= 5;
console.log(incremento);

/*operador unario summa uno o resta uno i++, i-- */


let sumar = 0;
console.log(sumar + 'line 49');
sumar++;
console.log(sumar + 'line 51')
sumar++;
console.log(sumar);
sumar--;
sumar--;
console.log(sumar); 

for (let i = 0; i < 30; i++){

}
/*
++variable = preincremento primero modifica el valor y despues hace uso de la variable 
variable++ post incremento usa la variable y despues hace el incremento 
 */
let num = 5;
console.log(++num);// preincremento

console.log(num++);//5
console.log(num);//

for(let i = 0; i < 10; i++){
    for(let i = 0; j < 10; j++);
};