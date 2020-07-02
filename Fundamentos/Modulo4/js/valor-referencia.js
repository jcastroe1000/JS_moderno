//primitivos por valor
let a=10;
let b=a;
a=30;
console.log({a,b});
//todos los objetos son pasados por referencia
let juan = {nombre: 'Juan'};
let ana  = {...juan};

console.log({juan,ana});
ana.nombre = 'Ana';

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony  = cambiarNombre(peter);

console.log({peter,tony});

//arreglos


const frutas = ['Platano' ,' Melon','Piña'];
//const otrasFrutas= [...frutas];
console.time('slice');
const otrasFrutas= frutas.slice();
console.timeEnd('slice');
//
console.time('spread');
const otrasFrutas2= [...frutas];
console.timeEnd('spread');





otrasFrutas.push('Mango');

console.table ({frutas,otrasFrutas});


function noscroll () {
    document.getElementById("main").setAttribute("scrolling","no");
    console.log("hola");
   }
  
  