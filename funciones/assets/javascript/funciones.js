/*funcion 
    es un bloque de codigo reutilizable Puede tener o no parametros de entrada 
    puede o no devolver algun valor */

    function sumar (numero1,numero2){
        //operaciones a ejecutar
        return numero1 + numero2;
        console.log('hola desde la funcion');// si colocas algo debajo de return nunca se va a ejecutar
    }

    function restar (numero1, numero2){
        document.write(`la resta de ${numero1} y ${numero1 - numero2} es ${suma} <br>`);
    }// esta funci[on no va a devolver ningun valor lo va a escribir en html directamente todo el c[odigo se ejecuta dentro de la funci[on

    let numero1 = parseInt(prompt('numero 1'));
    let numero2 = parseInt(prompt('numero 2'));
    let suma = sumar(numero1, numero2);

    document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);//hace referencia al documento, sellama template string se usa para apis 
    restar(numero1,numero2),
    document.write('la suma de ' + numero1 + 'y ' + numero2 + " es " + suma);  
    

    /*dependiendo de la entrada que tenga va a ser la salida si coloco las mismas entradas siempre voy a tener las mismas salidas puede haber objetos y arreglos dentro de los parametros de una funcion 

    para ejecutar una funcion nombre de la funcion abro parentesis y pongo los parametros 


    backstick comilla invertida
    return se utiliza para devolver un valor 
    2

     */