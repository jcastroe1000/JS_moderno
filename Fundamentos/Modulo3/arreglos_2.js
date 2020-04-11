let juegos = ['Zelda', 'Fifa','Marvel','COD'];

console.log('Largo:' ,juegos.length);

let ultimo= juegos[juegos.length-1];
console.log({ultimo});

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});

//añadir al final
let nuevaLogitud = juegos.push ('Angry Birds');
console.log({nuevaLogitud,juegos});

//añadir al inicio
nuevaLogitud = juegos.unshift('Fire Emblem');
console.log({nuevaLogitud,juegos});

//borrar
let juegoBorrado = juegos.pop()
console.log({juegoBorrado,juegos});

//eliminar por posición
let pos=1;

let juegosBorrados =juegos.splice(pos,2);

console.log({juegosBorrados,juegos});


//buscar

let buscar= juegos.indexOf('Marvel');
console.log(buscar);