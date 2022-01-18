let $titulo =document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';//agrego un id texto a el p llamandolo a trav[es de su clase 
/* $texto.style = 'color: red; font-size: 24px';estoy agregando estilo a la etiqueta p a trav[es de su class estos estilos se agregan el l[inea  */
/* 
$texto.className = 'bg-purple'
$texto.className = "h3";  de esta manera la segunda clase subtituye la instrucci[on de la clase de arriba  */

$texto.className = 'bg-purple h3' //combina las dos clases 
$texto.classList.add('text-center')//agrega o remueve elementos 
$texto.classList.remove('bg-purple')// se remueve la clase 