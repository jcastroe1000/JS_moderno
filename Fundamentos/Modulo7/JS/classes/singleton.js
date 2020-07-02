//instancias unicas de la clase

class singleton{
    static instancia;
    nombre='';

    constructor (nombre=''){

        if(!!singleton.instancia){
            return singleton.instancia;
        }
        singleton.instancia=this;
        this.nombre=nombre;
    }
}

const instancia1=new singleton('Ironman');
const instancia2=new singleton('Spider');
const instancia3=new singleton('Hulk');
console.log (`Nombre en la instancia es : ${instancia1.nombre}`);
console.log (`Nombre en la instancia es : ${instancia2.nombre}`);
console.log (`Nombre en la instancia es : ${instancia3.nombre}`);