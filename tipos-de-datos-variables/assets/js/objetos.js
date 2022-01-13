/* /*objeto es una estructura de informacion
tenemos una clave: nombre 
y un valor: 'luis daniel'
la clave no va entre comillas.
siempre funciona en pares clave y valor  
let miObjeto={
    nombre:'luis daniel'
} */

let nombre = 'luis daniel';
let edad = 29;
let dirección = 'ciudad de méxico';
let numero = 1221231223123;

console.log(nombre);

let persona = {
    nombre:{
        apellidopaterno: 'garcia',
        apellidomaterno: 'Nunez',
        nombre: 'luis daniel'
    },
    edad: 29,
    direccion: {
        ciudad: 'CDMX',
        delegación: 'álvaro obregón'
    },
    numero: [123123123]


};
console.log(persona)
console.log(persona.nombre)
console.log(persona.numero[0])
  

/*para objetos usamos llaves si quiero agregar otra propiedad dentro del objeto agrego una ,  
el primer console imprime todo el objeto 
el segundo imprime solo una clave con su valor 
se puede anidadr un obejto dentro de otros como en el caso de direccion
el tercer console.log imprime persona numero y arreglo dentro de numero 
el objeto puede contener funciones estructuras */

//areglos vs objetos 
// ambos sirven para almacenar info
//cambia la estructura en el arreglo tienes una serie valores pero la forma de estructurarse es a trav[es] de indice
// con objetos la estructura es m[as] clara a trav[es] de sus claves 

let audifonos{
    marca:{
        sony:{
            modelo:{
                 MDREX14APB,
                color: negro,
                tipo: alámbrico,
                control_de_ruido: no,
           
                 WH1000XM4B,
                 color: azul,
                 tipo: inálambrico,
                 control_de_ruido: si 
                },
        },
        cheelom:{
            modelo:{

            
            
            color: black,
            tipo: inalambrico,
            control_de_ruido: no
        },
        },
    },
    
}
let 