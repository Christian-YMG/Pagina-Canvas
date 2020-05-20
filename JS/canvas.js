
const canvas = () => {

let lienzo = document.getElementById('canvas');
let contexto = lienzo.getContext('2d');

contexto.fillStyle = "rgb(90,90,90)"

imagen = new Image();
imagen.src = '../Media/imagen.png';

imagen.onload = () =>{
    contexto.drawImage(imagen, 200, 140) 
}
}

