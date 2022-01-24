let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {
    console.log('no me presiones');

fetch('https://dog.ceo/api/breeds/image/random')
.then(resp => resp.json()).then(data => {
    console.log(data);
    
    let imagenGatito = document.createElement('img');
    imagenGatito.src = data.message;
    document.body.appendChild(imagenGatito);

})

});