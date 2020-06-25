const carros = ['ford','mazda','Honda','Toyota'];

console.warn('While');
let i=0;

while(i < carros.length){
    console.log(carros[i]);
    i=i+1;
}


console.warn('Do While');
let j=0;
do{

console.log(carros[j]);
j++;

}while(carros[j]);