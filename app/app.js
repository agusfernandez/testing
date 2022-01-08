let dineroCofla= parseInt(prompt("Cuanto dinero tenes?"));
let dineroPedro = parseInt(prompt("Cuanto dinero tenes pedro?"));
let dineroRoberto = parseInt(prompt("Cuanto dinero tenes roberto?"));

if(dineroCofla >=0.6 && dineroCofla <1){
    alert ("Cofla: comprate el helado de agua");
    alert (" y te sobran " + (dineroCofla - 0.6));
} else if(dineroCofla >=1 && dineroCofla <1.6){
    alert ("Cofla: comprate el helado de crema");
    alert (" y te sobran " + (dineroCofla - 1));
} else if(dineroCofla >=1.6 && dineroCofla <1.7){
    alert ("Cofla: comprate el helado de heladix");
    alert (" y te sobran " + (dineroCofla - 1.6));
} else {
    alert ("estas en el horno");
}