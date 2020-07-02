const regresaTrue = ()=>{
    console.log('regresa true');
    return true;
}

const regresaFalse = ()=>{
    console.log('regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');

console.log(true && true);
console.log(true &&false);


console.log('==========');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue()  && regresaFalse());


console.warn ('OR');
console.log(true|| false);
console.log(regresaTrue()  || regresaFalse());


console.warn('asignaciones');

const soyUndef= undefined;
const soyNull= null;
const soyFalso= false;


const a1=true && 'Hola Mundo' &&150;
const a2='Hola'&&'Mundo';
const a3= soyFalso||'ya no soy falso';
const a4= soyFalso||soyUndef||soyNull||'ya no soy falso de nuevo'||true;
const a5= soyFalso||soyUndef||regresaTrue()||'ya no soy falso de nuevo'||true;

console.log({a1,a2,a3,a4,a5});