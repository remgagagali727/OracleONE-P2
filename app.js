let maxValue = 10;
let value;
let previousValues = [];
let tries;
let triess;
let maxTries = Math.floor(maxValue/3)+1;


function asingElementText(elementName,text){
    let element = document.querySelector(elementName);
    element.innerHTML = text;
}

function checkUserValue(){
    let userValue = parseInt(document.getElementById('userNumber').value);
    if(userValue === value) {
        asingElementText("p","Acertaste el número secreto en "+tries+" "+triess);
        enableButton("reiniciar");
    } else {
        if(userValue > value){
            asingElementText("p","El número secreto es menor");
        } else {
            asingElementText("p","El número secreto es mayor");
        }
        ++tries;
        cleanInput("userNumber");
    }
    if(tries==2) triess = "intentos";
}

function enableButton(id){
    document.getElementById(id).removeAttribute('disabled');
}

function disableButton(id){
    document.getElementById(id).setAttribute('disabled',true);
}

function cleanInput(id){
    document.getElementById(id).value = "";
}

function inicialConditions(){
    if(maxTries--==0){
        asingElementText("p","Fin del juego adivinaste todos tus numeros");
        disableButton('tryGame');
        return;
    }
    asingElementText("h1","Juego del Número Secreto");
    asingElementText("p","Elije un número entre 1 y "+maxValue);
    let flag = true;
    //console.log(previousValues);
    value = randomNumberGenerator(maxValue);
    //console.log(value);
    previousValues.push(value);
    tries = 1;
    triess = "intento";
}

function newGame(){
    //Limpiar input
    cleanInput('userNumber');
    //Mostrar mensaje de intervalo
    //Generar Numero Aleatoreo;
    //Reiniciar Intentos
    inicialConditions();
    //Desabilitar boton
    disableButton('reiniciar');
}

function randomNumberGenerator(max){
    let v = Math.floor(Math.random()*max)+1;
    if(previousValues.includes(v)){
        v = randomNumberGenerator(max);
    }
    return v;
}

inicialConditions();