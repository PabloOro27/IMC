// variables
const botonCalcular = document.querySelector('#calc')
let span = document.querySelector('#result')


function iniciar(){
   
    botonCalcular.addEventListener('click', indiceMasaCorporal)
}
function indiceMasaCorporal()
{
    let altura = document.querySelector('#stature').value
    let peso = document.querySelector('#weight').value

    calcular(peso, altura);
}
function calcular(peso, altura){
    let resultado

    altura = altura / 100;
    resultado = peso / (altura * altura); 
    console.log(altura + '  ' + peso)
    span.innerHTML= resultado; 
}

window.addEventListener ('load', iniciar)