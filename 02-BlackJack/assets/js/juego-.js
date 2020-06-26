let deck=[];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJ=0;
let puntosM=0;


//referencias html

const btnPedir= document.querySelector('#pedir');
const btnDetener= document.querySelector('#detener');
const btnNuevoJuego=document.querySelector('#nuevo');
const puntosSmall= document.querySelectorAll('small');
const divcartasJ=document.querySelector('#jugador-cartas');
const divcartasM=document.querySelector('#maquina-cartas');

const crearDeck = ()=>{
    for(let i=2;i<=10;i++){
        for( let tipo of tipos ){
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo);
        }
    }


    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();


//Funcion para tomar una carta

const pedirCarta = ()=>{
    if(deck.length ===0){
        throw 'No cartas suficientes';
    }

    const carta = deck.pop();

    return carta;
}


//pedirCarta();

const valorCarta = (carta) =>{
    const valor = carta.substring(0,carta.length-1);
    return (isNaN (valor))?
        (valor === 'A')?11:10
        : valor*1;
}

//tuno compu

turnoComputadora=(puntosMinimos)=>{
    do{
        const carta=pedirCarta();
        puntosM= puntosM + valorCarta(carta);
        puntosSmall[1].innerText= puntosM;
        const imgCM =document.createElement('img');
        imgCM.src=`../02-BlackJack/assets/cartas/${carta}.png`;
        imgCM.classList.add('carta');
        divcartasM.append(imgCM);
        if(puntosMinimos>21){
            break;
        }
    }while( (puntosM < puntosMinimos) && (puntosMinimos<=21));

    setTimeout(()=>{
            
        if(puntosM===puntosMinimos){
          alert('nadie gana');
        }else if(puntosMinimos>21){
           alert('Compu gana');
        }else if(puntosM>21){
            alert('Jugador Gana');
        }
    },10);

}


//Eventos
 btnPedir.addEventListener('click',() =>{
    const carta=pedirCarta();
    puntosJ= puntosJ + valorCarta(carta);
    puntosSmall[0].innerText= puntosJ;
    const imgCJ =document.createElement('img');
    imgCJ.src=`../02-BlackJack/assets/cartas/${carta}.png`;
    imgCJ.classList.add('carta');
    divcartasJ.append(imgCJ);

    //puntos
    if(puntosJ >21){
        console.warn('You Lose');
        btnPedir.disabled =true;
        btnDetener.disabled =true;
        turnoComputadora(puntosJ);
        btnPedir.disabled=true;
    }else if(puntosJ===21){
        console.warn('21 Genial');
        btnPedir.disabled =true;
        btnDetener.disabled =true;
        turnoComputadora(puntosJ);
    }


 });

btnDetener.addEventListener('click',() =>{
    btnPedir.disabled =true;
    btnDetener.disabled =true;
    turnoComputadora(puntosJ);

});

btnNuevoJuego.addEventListener('click',()=>{
    deck = [];
    deck =crearDeck();
    puntosJ=0;
    puntosM=0;
    puntosSmall[0].innerText =0;
    puntosSmall[1].innerText =0;
    divcartasJ.innerHTML ='';
    divcartasM.innerHTML ='';
    btnPedir.disabled=false;
    btnDetener.disabled=false;

});