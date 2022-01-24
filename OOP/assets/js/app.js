/*clases son algo como un molde que nos permite crear objetos para crear una clase usamos la palabra reservada classs puede llevar cualquier nombre una clase siempre lleva la primer letra en mayúscula

dentro de el molde va un constructor es una funci[on que se va a iniciar cuando se inicie la clase se usa si es necesario 
    
se usa const y el nombre del objeto  new dice al compilador que estamos creando un nuevo objeto se usa para integrar datos al objeto con los datos que va a iniciar  el constructor es una funcion pero no se usa la palabra reservada cfunction 

para decirle a la clase que parametros vaya a utilizar para la el objeto 


la palabra reservada this hace referencia a una variable que se crea internamente dentro de la funcion constructor
le dice al compilador que la variable es la misma que esta en la class Animal el primer nombre es un atributo que se va a asignar al objeto y el segundo nombre es el parametro de el atributo 

en java para declarar una clase primero debemos declarar las varibles 

En el constructor se pondrían los valores iniciales, si tu necesitas recuperar los valores o cambiarlos necesitas los métodos get y set
*/

class Animal{
    nombre ;
    especie;
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }
    //getters y setters son métodos los métodos son funciones se utilizan con el proposito de leer o modificar un atributo de el constructor
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie (){
        return this.especie
    }
    set setEspecie(especie){
        return this.especie;
    }


    /*métodos son igual a una funcion for each, reverse, son ejemplos de métodos se omite la palabra function hace uso de los datos (parametros del constructor)*/
    presentarse(){
        document.write(`hola soy ${this.especie} y me llamo ${this.nombre} <br>`)
    } 
    //lo de abajo es otro método
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return mensaje;
    }

    /*metodos estaticos es un metodo que se puede ejecutar si que se cree un objeto */ 
    static saludar(){
        return console.log("hola soy un método estático")
    }

}

Animal.saludar();// estoy llamando al metodo estatico puede existir aqui por que no necesita un objeto los otros metodos si lo necesitan el objeto es las const Animal1 de abajo

const Animal1 = new Animal("Scooby", "Perro");//creamos un objeto usando el plano animal 
console.log(Animal1);// esto devuelve un objeto el objeto se muestra entre llaves en la consola 

const Animal2 = new Animal("Pecas","Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3)

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre ="Scrappy";//notaci[on de punto para cambiar el valor ]
console.log(Animal1.nombre);
console.log(Animal1);


document.write(Animal1.cambiarNombre("Oddie"));// metodo cambiar nombre que nos cambia el valor 

/*getter nos ayudan a obtener valoresde un atributo

set fija o cambia el valor de un atributo 

En el constructor se pondrían los valores iniciales, si tu necesitas recuperar los valores o cambiarlos necesitas los métodos get y set
*/

/* console.log(Animal1.getNombre());  nos arroja que no es una funcion los getter y setter los identifica como atributos si quiero que muestre algo quito los parentesis */
console.log(Animal1.getnombre);
/* Animal1.setNombre('Manchas');
nos dice que no es una funcion */
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1)