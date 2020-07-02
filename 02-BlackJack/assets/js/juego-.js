//patrón moódulo
//función anonima
(()=>{
    'use strict'
    let deck=[];
const tipos = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];

let puntosJugadores = [];

//referencias html

const btnPedir= document.querySelector('#pedir'),
        btnDetener= document.querySelector('#detener'),
        btnNuevoJuego=document.querySelector('#nuevo');
const   puntosSmall= document.querySelectorAll('small'),
        divcartasJugadores=document.querySelectorAll('.divCartas');
    


//funcion para inicializatr juego
 const iniciarJuego = (numJugadores=2) =>{
    deck= crearDeck();
    puntosJugadores =[];
    for (let i=0;i<numJugadores;i++){
        puntosJugadores.push(0);
    }
    puntosSmall.forEach(elem =>elem.innerText=0);
    divcartasJugadores.forEach(elem=>elem.innerText=0);
    btnPedir.disabled=false;
    btnDetener.disabled=false; 
    
}

const crearDeck = ()=>{
    deck=[];
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
    return _.shuffle(deck);
}






const pedirCarta = ()=>{
    if(deck.length ===0){
        throw 'No cartas suficientes';
    }
        return  deck.pop();
}




const valorCarta = (carta) =>{
    const valor = carta.substring(0,carta.length-1);
    return (isNaN (valor))?
        (valor === 'A')?11:10
        : valor*1;
}

//tuno compu

const acumularPuntos =(carta,turno)=>{
    puntosJugadores[turno]= puntosJugadores[turno] + valorCarta(carta);
    puntosSmall[turno].innerText=puntosJugadores[turno];
    return puntosJugadores[turno];
}

const crearCarta  = (carta,turno)=>{
    const imgCM =document.createElement('img');
    imgCM.src=`../02-BlackJack/assets/cartas/${carta}.png`;
    imgCM.classList.add('carta');
    divcartasJugadores[turno].append(imgCM);
}    


const determinarGanador = ()=>{

    const [puntosMinimos,puntosComputadora] = puntosJugadores;

    setTimeout(()=>{
            
        if(puntosComputadora===puntosMinimos){
          alert('nadie gana');
        }else if(puntosMinimos>21){
           alert('Compu gana');
        }else if(puntosComputadora>21){
            alert('Jugador Gana');
        }
    },10);

}

const turnoComputadora=(puntosMinimos)=>{
    let puntosComputadora=0;
    do{
        const carta=pedirCarta();
        puntosComputadora=acumularPuntos(carta,puntosJugadores.length-1);
        crearCarta(carta,puntosJugadores.length-1);

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21));
    determinarGanador();

}



 btnPedir.addEventListener('click',() =>{
    const carta=pedirCarta();
    const puntosJugadores=acumularPuntos(carta,0);
    crearCarta(carta,0);

    if(puntosJugadores >21){
        console.warn('You Lose');
        btnPedir.disabled =true;
        btnDetener.disabled =true;
        turnoComputadora(puntosJugadores);
        btnPedir.disabled=true;
    }else if(puntosJugadores===21){
        console.warn('21 Genial');
        btnPedir.disabled =true;
        btnDetener.disabled =true;
        turnoComputadora(puntosJugadores);
    }


 });

btnDetener.addEventListener('click',() =>{
    btnPedir.disabled =true;
    btnDetener.disabled =true;
    turnoComputadora(puntosJugadores[0]);

});

btnNuevoJuego.addEventListener('click',()=>{
    iniciarJuego();


});


})();



