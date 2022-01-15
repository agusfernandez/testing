class Calculator{
    constructor(){

    }

    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }

    resta(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }

    potenciar(num, exp){
        return num**exp;
    }
}

const calculadora = new Calculator();

alert("¿Que operación desea desar?");
let operacion = prompt("1:suma, 2:resta, 3:multiplicar, 4:dividir, 5:potenciacion");

if(operacion ==1 ){
    let numero1= prompt('primer numero para sumar');
    let numero2= prompt('segundo numero para sumar');
    let resultado = calculadora.sumar(numero1, numero2);
    alert (`tu resultado es ${resultado}`);
} else if (operacion ==2){
    let numero1= prompt('primer numero para restar');
    let numero2= prompt('segundo numero para restar');
    let resultado = calculadora.restar(numero1, numero2);
    alert (`tu resultado es ${resultado}`);
} else if (operacion==3){
    let numero1= prompt('primer numero para multiplicar');
    let numero2= prompt('segundo numero para multiplicar');
    let resultado = calculadora.multiplicar(numero1, numero2);
    alert (`tu resultado es ${resultado}`);
} else if (operacion==4){
    let numero1= prompt('primer numero para dividir');
    let numero2= prompt('segundo numero para dividir');
    let resultado = calculadora.dividir(numero1, numero2);
    alert (`tu resultado es ${resultado}`);
} else if (operacion==5){
    let numero1= prompt('numero a potenciar');
    let numero2= prompt('exponente');
    let resultado = calculadora.potenciar(numero1, numero2);
    alert (`tu resultado es ${resultado}`);
} else{
    alert("no se ha encontrado la operacion")
}