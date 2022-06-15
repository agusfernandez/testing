let alto=window.screen.availHeight;
let ancho=window.screen.availWidth;


// Me confirma la compra?
let comprar = confirm (`El alto es ${alto}, el ancho es ${ancho}`);
if (comprar){
    alert("compra realizada exitosamente");
} else{
    alert ("compra rechazada");
}