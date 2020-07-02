import '../css/componentes.css';



export const Saludar =(nombre) => {
    console.log('Creando etiqueta h1');

    const h1 =document.createElement('h1');
    h1.innerText = `hola, ${nombre}, cómo estás?`;
    document.body.append(h1);

}
