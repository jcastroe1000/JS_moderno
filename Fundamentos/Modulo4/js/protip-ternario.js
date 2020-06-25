const elMayor=(a,b)=>  (a > b) ?a:b;

const tieneMembresia= (miebro)=>(miebro) ? '2 Dll' :'15 dlls'

console.log(elMayor(20,15));
console.log(tieneMembresia(true));


const amigo=false;
const amigosArg=['Peter','Tony','Dr. Strange',amigo?'Thor':'Loki' ];

console.log(amigosArg);




const nota=85;

const grado=nota>=95?'A+' :
            nota>=90?'A'  :     
            nota>=85?'b+' :
            nota>=80?'B' :
            nota>=75?'C+' : 'F'   ;


console.log({nota,grado})
 