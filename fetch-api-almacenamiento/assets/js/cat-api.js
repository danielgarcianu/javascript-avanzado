let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {
    console.log('no me presiones');
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        
        let imagenGatito = document.createElement('img');
        imagenGatito.src = data[0].url;
        document.body.appendChild(imagenGatito);

    })
    
});

/* fetch esta haciendo la petici[on de la imagen
    .then entonces dame una respuesta pero convierte esa respuesta en Json y devuelve una promesa   
    .then procesa la promesa  
    

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        consolelog.(data);
    })
funcion corta ^

    
    
});
    function(resp){
        return resp.json()
    }.then(data => {
        console.log(data);
    })

funcion larga ^
    hace una peticion a esa url y devuelve una promesa .then cuando fetch devuelva la promesa procesala en Json que devuelve una promesa .then procesa la proemsa y data ya es informaci[on con la que puedo trabajar 
    
    es una estructura comuna para trabajaar 
*/