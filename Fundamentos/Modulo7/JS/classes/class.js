class Persona{
    static _conteo=0;
    nombre='';
    codigo='';
    frase='';
    comida='';
    

    static get conteo(){
        return Persona._conteo+ 'Instancias';
    }

    static mensaje(){
            console.log('Hola......mensaje estático');

    }


    constructor (nombre ='Vacio',codigo='Vacio',frase='Vacio'){
        this.nombre=nombre;
        this.frase=frase;
        this.codigo=codigo;
        Persona._conteo++;
    }

    //set y gets
    set setComidaFavorita (comida){
        this.comida=comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    Persona

    //metodo

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} y dijo ${this.frase}`);
    }
}


const spider= new Persona('Peter','Spider','Hola');


/* //spider.quienSoy();
spider.miFrase();

spider.setComidaFavorita = 'tacos';
console.log(spider.getComidaFavorita);
console.log(spider); */

/* console.log('Conteo estático',Persona._conteo);
console.log(Persona.conteo);
Persona.mensajeEXterno='Hola Mundo';
console.log(Persona.mensajeEXterno);
console.log(Persona);
Persona.mensaje();
 */