function saludar (nombre){
    //console.log (arguments);
    //console.log('hola '+ nombre);   
    return [1,2,3,4,5];
    console.log ('estoy despues');
}

//saludar();


//funcion anonima
//const saludar2 = function (){
//    console.log('hola Mundo 2');   
//}

const retornoSaludar = saludar('Toño' ,30 ,false , 'Mexico');
console.log(retornoSaludar [3]);

//funciones flecha o landa funtions

const saludar_flecha = () =>{
    console.log('Hola Flecha');
}

//saludar_flecha();


const saludar_flecha2 = (nombre) => {
    console.log('Hola Flecha ' + nombre);
}


//saludar_flecha2('jose');

function sumar (a,b){
    return a+b;
}
//funciones flecha
const  sumar2 = (c,d) => c+d;

function getAleatorio (){
    return Math.random();
}

//función flecha getAleatorio

const getAleatorio2 = () =>  Math.random();

console.log( sumar (5,3));
console.log( sumar2 (5,5));
console.log(getAleatorio());
console.log(getAleatorio2());