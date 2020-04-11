const crearPersona = (nombre, apellido) => ({nombre,apellido});
        
const persona =crearPersona('Antonio' , 'Castro');
console.log (persona);


function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos (30,true,false,'Antonio', 'Castro');


const imprimeArgumentos2 = (edad, ...args) => {
//console.log(args);
return args;
}

const [vivo,casado,nombre] = imprimeArgumentos2 (40,true,false,'Antonio', 'Castro');
//console.log(argumentos[0],argumentos[3]);
console.log({vivo,casado,nombre});

const {apellido:segundo_apellido} =crearPersona('Antonio' , 'Castro');
console.log({segundo_apellido});


const Tony ={
    nombre:'Toño',
    codeName:'Jcastro',
    edad:30,
    trajes: ['Mark I','Mark 3' , 'HilkBuster']

};

//const imprimePropiedades = (persona) =>{
//    console.log (persona.nombre);
//}


const imprimePropiedades = ({nombre,codeName,edad,trajes}) =>{ 
    console.log({nombre});
    console.log({codeName});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(Tony);