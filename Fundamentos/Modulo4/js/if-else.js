let a=5;

if(a>=10){
    console.log ('A es mayor o igual a 10');
}else{
    console.log ('A es mejor a 10');
}

const hoy= new Date();
let dia = hoy.getDay();

console.log({dia});

/* if (dia===0){
    console.log('Domingo');
}else if( dia===1){
    console.log('Lunes');
}else if (dia ===2){
    console.log('Martes');
}else{
    console.log('No Domingo, Ni Lunes, Ni Martes');
} */


dia= 0;

const diaLetras={
    
    
    0: ()=>'domingo - 0',
    1: ()=>'lunes - 1',
    2: ()=>'martes -2',
    3: ()=>'meircoles -3',
    4: ()=>'jueves -4',
    5: ()=>'viernes -5',
    6: ()=>'sàbado -6',
}

const diaLetras2=[
    'domingo  ',
    'lunes ',
    'martes ',
    'meircoles',
    'jueves ',
    'viernes',
    'sàbado ',

]
    


console.log(diaLetras[dia]());
console.log(diaLetras2[dia]);

