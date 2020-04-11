let personaje ={
    nombre:'Jcastro',
    codeName:'Toño',
    edad:30,
    coords :{
        lat:34.90,
        lng:-.40
    },
    trajes: ['Mark I','Mark 3' , 'HilkBuster']

};

console.log('Nombre:' , personaje.nombre);
console.log('CodeName:' , personaje);
console.log('Edad:' , personaje.edad);
console.log('Coordenadas:', personaje.coords.lat);
console.log('Numero de trajes:', personaje.trajes.length);
console.log('Numero de trajes:', personaje.trajes
[personaje.trajes.length-1]);

const x = 'vivo';

// más detalles

delete personaje.edad;
console.log(personaje);
personaje.casado= true;
const entriesPares= Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);


//bloquear 
personaje.dinero= 100000000000000000000;

personaje.coords.lat=50.40;

const  propiedades = Object.getOwnPropertyNames (personaje);
console.log(propiedades);

const valores =Object.values(personaje);
console.log(propiedades ,valores);