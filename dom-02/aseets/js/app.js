/* let $titulo =document.getElementById('titulo');
titulo.textContent='Titulo escrito desde javascript' */

let $titulo = document.querySelector('#titulo');//dentro de el parentesis va la etiqueta, .nombre de la clase, #nombre del id 
$titulo.textContent = 'Titulo escrito desde JS'

let $parrafo = document.querySelector('p');
console.log($parrafo.textcontent)

/* let $parrafos =document.querySelectorAll('p');
console.log($parrafos);  accede a todos los elementos p de html */

let $parrafos =document.querySelectorAll('p');
console.log($parrafos[1].textContent);//accede a la informaci[on de la segunda etiqueta p de el documentohtml

/*queryselector nos devuelve el primer elemento que encuentre de la clase o etiqueta  */
/*querySelectorAll nos devuelve todos los ele */

/*Cuando una variable tiene un simbolo de pesos esta haciendo referencia a una variable del dom */

//////////////////////////////////////////////////////////
//CREAR ELEMENTOS EN EL DOM

/*CREATE element tag options CREA UN ELEMENTO POR SU ETIQUETA pero lo tienes en memoria y se pueden cambiar sus elementos o contenido para insertarlo posteriormente en html una vez creado debemos agregarlo al html y eso se hace con document.body.append(nombre de la variable js en donde se guardo )*/

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';
document.body.append(subtitulo);

/*textContent devuelve el contenido de texto de el elemento lo reemplaza en elcodigo de abajo cambia el contenido dentro el el dvi que es un p con texto por el hola 

inner html nos devuelve todo lo que esta dentro  por ejemplo inner nos devuelve la etiqueta p mas el texto contenido dentro de la etiqueta p nos permite recuperar la info o reemplazarla en el código de abajo cambia la etiqueta p por br modifica a los hijos 


todo lo que pongamos dentro del '' de .textContent lo convierte a texto incluso si son etiquetas, en cambio iner si lo muestra como etiqueta 
.outerHTML
afecta todo el elemento en el código de abajo reemplaza el div por un hola modifica al padre

*/

let $contenido = document.querySelector('#contenido');
/* console.log($contenido.textContent = 'hola');
console.log($contenido.innerHTML = '<br>');
console.log($contenido.outerHTML = 'Hola'); */


// INSERTAR ELEMENTOS

/* .appendChild agrega un elemento como un hijo en el c[odigo de abajo inserta un elemnto p con un texto contenido de mi nuevo parrafo dentro de un div con id contenido  */

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);


/////////////////////////////////////////////////////////

/*subtitulo se inserta despues de que se termina el elemnto titulo "aqui puede ir afterend afterbegin beforeend beforebegin" */
let subtitulo2 = document.createElement('h3');
subtitulo2.textContent = 'Este es un subtitulo desde JS';
$titulo.insertAdjacentElement("afterend",
subtitulo2);