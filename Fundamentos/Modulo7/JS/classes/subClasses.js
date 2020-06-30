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

  

    //metodo

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} y dijo ${this.frase}`);
    }
}



class Heroe extends Persona{
    
    clan = 'sin clan';
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan='Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.clan}`);
        super.quienSoy();
       
    }

}

const spider= new Heroe('Peter','Spider','Hola');
//const spider= new Heroe();

console.log(spider);
spider.quienSoy();