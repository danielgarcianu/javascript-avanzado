class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    //metodo
    atacar (){
        return console.log(`${this.nombre} esta atacando.`)
    }
}

class Pikachu extends Pokemon{
    constructor(nombre, tipo , edad){
        super(nombre, tipo);
        this.edad = edad;
    }
    //metodos 
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando`)
    }
}
    class Electrico extends Pikachu{
        constructor(nombre, tipo, edad, color){
            super(nombre,tipo, edad);
            this.color = color;
        }
    }



const Electrico1 = new Electrico ("Panchito", "Electrico", 4, "gris");
console.log(Electrico1);

const electrico1 =new Electrico();

const Pikachu1 = new Pikachu('Juan', 'electrico', 3);//pertenece a la clase pokemon
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon("charmander", "fuego");
Pokemon1.atacar();
/* Pokemon1.evolucionar();//pertenece a la clase pikachu por eso muestra error */

//para hacer referencia al constructor de la clase padre debemos poner super 
/*extends se usa para heredar los atributos y metodos a la clase hija  */