console.log("gik");
const container = document.querySelector(".flex-container");
const btnsend= document.querySelector('.btn-send');

//cargar muchas llaves

function crearLlave(nombre, modelo, precio){
    let img = `<img class="llave-img" src="img/llaves.png">`;
    let nombres= `<h2>${nombre}</h2>`;
    let modelos= `<p>${modelo}</p>`;
    let precios= `<p>${precio}</p>`;
    return [img, nombres, modelos, precios];
}

//const llave = crearLlave ("LLave1", "nuevo" , "54");
//container.innerHTML = llave[0] + llave[1] + llave[2];

const seleccionarLLave=(number)=>{
    document.querySelector('.key-data').value=number;
}
let variosElementos= document.createDocumentFragment();

for(var i=0; i<20; i++){
    // creacion de nuemeros random para el precio y el modelo
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+20);
    let llave = crearLlave(`llave: ${i}`, `modelo: ${modeloRandom}`, `precio: $${precioRandom}`);
    let box= document.createElement('DIV');
    //tomar data del fomrulario y saber q llave estoy seleccionando
    box.addEventListener("click",() =>{seleccionarLLave(modeloRandom)});
    //me agrega el focus
    box.tabIndex=i;
    box.classList.add(`item-${i}`, 'flex-item');
    box.innerHTML = llave[0] + llave[1] + llave[2]+ llave[3];
    variosElementos.appendChild(box);
}

container.appendChild(variosElementos);