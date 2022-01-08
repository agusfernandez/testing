class celulares{
    constructor(color, peso, resolucion_de_pantalla, resolucion_de_camara, ram){
        this.color= color;
        this.peso = peso;
        this.resolucion_de_pantalla= resolucion_de_pantalla;
        this.resolucion_de_camara=resolucion_de_camara;
        this.ram=ram;
        this.encendido = false;
    }

    presionaBotonEncendido(){
        if(this.encendido==false){
            console.log("celular on");
            this.encendido=true;
        } else{
            console.log("celular apagado");
        }
    }

    reiniciar(){
        if(this.encendido==true){
            console.log("reiniciandp");
        } else{
            console.log("el celular ya esta apagado");
        }
    }

    tomarFotos(){
        console.log(`foto tomada en la resolicion de ${this.resolucion_de_pantalla}`);
    }

    grabarVideos(){
        console.log(`foto tomada en la resolicion de ${this.resolucion_de_camara}`);
    }


    infoMobile(){
        console.log( `
            Color: ${this.color};
            Peso: ${this.peso};
            Resolucion de Pantalla: ${this.resolucion_de_pantalla};
            Resolucion de Camara: ${this.resolucion_de_camara};
            Ram:${this.ram};
            Encendido:${this.encendido};
        `)
    }


}

class celularAltaGama extends  celulares{
    constructor(color, peso, resolucion_de_pantalla, resolucion_de_camara, ram, camara_alta_gama){
        super (color, peso, resolucion_de_pantalla, resolucion_de_camara, ram);
        this.camara_alta_gama= camara_alta_gama;
    }

    grabarVideoLento (){
        console.log("grabando en camara lenta");
    }

    reconocimientoFacial(){
        console.log("reconocimiento facial");
    }

    infoCelularAltaGama(){
        return this.infoMobile() + `Resolucion de camara: ${this.resolucion_de_camara}`;
    }
}

const celularOne = new celulares ("negro", "150gr", "5p", "full-hd", "4gb");
const celularDos = new celularAltaGama ("negro", "150gr", "5p", "full-hd", "4gb", "6", "alta gama");

celularOne.presionaBotonEncendido();
celularOne.reiniciar();
celularOne.tomarFotos();
celularOne.infoMobile();
console.log("info de alta gama " + celularDos.infoCelularAltaGama());

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas= descargas;
        this.puntuacion= puntuacion;
        this.peso= peso;
        this.iniciada= false;
        this.instalada=false;
    }

    instalar(){
        if(this.instalada==false){
            this.instalada =true;
            console.log("app instalada");
        }
    }



    abrir(){
        if(this.iniciada==false && this.instalada==true){
            this.iniciada =true;
            console.log("app encendido");
        }
    }

    cerrar(){
        if(this.iniciada==true && this.instalada==true){
            this.iniciada =false;
            console.log("app cerrada");
        }
    }

    desinstalar(){
        if(this.instalada==true){
            this.instalada =false;
            console.log("app desinstalada");
        }
    }


}

const appOne= new App("1600", "10", "10mb");
appOne.instalar();
appOne.abrir();
appOne.cerrar();
appOne.desinstalar();

