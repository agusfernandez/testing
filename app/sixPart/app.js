console.log("holis");

let alto=window.screen.availHeight;
let ancho=window.screen.availWidth;


// Me confirma la compra?
let comprar = confirm (`El alto es ${alto}, el ancho es ${ancho}`);
if (comprar){
    alert("compra realizada exitosamente");
} else{
    alert ("compra rechazada");
}

// se debe crear un sistema que muestre todos los datos porque tiene toda la pantalla abierta

let href= window.location.href;
let pathname= window.location.pathname;
let protocol= window.location.protocol;
let hostname= window.location.hostname;

let html= `Protocolo: <b>${protocol}</b></br>`;
html +=  `Pathname: <b>${pathname}</b></br>`;
html +=  `Hostname: <b>${hostname}</b></br>`;
html +=  `Url completo: <b>${href}</b></br>`;

document.write(html);

