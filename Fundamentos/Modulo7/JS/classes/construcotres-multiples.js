class Persona{

    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }


    constructor(nombre, apellido, pais){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre},${this.apellido},${this.pais}`);
    }
}

    const nombre1='Jose',
          apellido1='Castro',
          pais1='Mexico';

    const Yessica ={
          nombre:   'yessica',
          apellido: 'Serrano',
          pais:     'Mexico'
    } 

    const Persona1= new Persona(nombre1,apellido1,pais1);
    const Persona2= Persona.porObjeto(Yessica);
    Persona1.getInfo();
    Persona2.getInfo();



