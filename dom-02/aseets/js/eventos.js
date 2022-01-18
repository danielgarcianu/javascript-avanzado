let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');


$btnMensaje.addEventListener('click', ()=>{
    console.log('No me presiones')
});

$mensaje.addEventListener('keydown', (e) =>{
    console.log(e.target.value);
    if(e.target.value.length < 3){
        $spanError.classList.remove('hide')
        $spanError.classList.add('error');
    } else {
        
            $spanError.classList.add('hide')
            $spanError.classList.remove('error');
    }

    /* console.log(e)
    console.log('Escribiste algo'); */

    });


/*como podemos agregar eventos a alg[un elemento
    se agregan a trav[es de .addEventListener;

    se le agrega el la accion que va a disparar el elevento
    despu[es se le agrega una funci[on an[onima  
        
    puede no ser una funci[on an[onima 
    revisar captura eventos 
    la e dentro de el prar[entesis de la funcion an[onima hace referencia a lo que se esta invocando y donde se esta invocando lo puedes revisar en consola 

    target muestra toda accion que realiza el usuario e.target.value

     if(e.target.value.length < 3){
        $spanError.classList.remove('hide')
        $spanError.classList.add('error');
    } else {
        if(e.target.value.length < 3){
            $spanError.classList.add('hide')
            $spanError.classList.remove('error');
    }
    con el c[odigo de arriba validamos una contrasenia quita la clase hide y muestra el mensaje y agrega el mensaje de error 

    el else hace lo contrario 



    */