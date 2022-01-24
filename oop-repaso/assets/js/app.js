class Animalito{
    constructor(nombre, edad, especie, revisado) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;
        /* Se introducirá un operador de corto circuito. 
        Este nos permite dejar un valor por defecto  */
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        //this.cantidadPacientes++;
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(pacientesRevisados){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            document.write("<br>Este paciente ha sido revisado<br>");
        } else {
            document.write("Este paciente ya fue revisado");
        }
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write("<br>" + this.listaPacientes[i].nombre);
        }
        document.write(`<br> Cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados} <br>`);
    }
}

const VeterinariaPanchita = new Veterinario();

const Animalito1 = new Animalito("Manchas", 5, "Perro");
const Animalito2 = new Animalito("Galleta", 2 , "Gato");
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchita.agregarPaciente(Animalito1);
VeterinariaPanchita.agregarPaciente(Animalito2);

console.log(VeterinariaPanchita.listaPacientes);

VeterinariaPanchita.mostrarLista();
VeterinariaPanchita.revisarPaciente(Animalito1);
VeterinariaPanchita.mostrarLista();