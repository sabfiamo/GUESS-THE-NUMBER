'use strict'
const buttonTest=document.querySelector('.js_button');
const inputElement=document.querySelector('.js_input');
const infoElement=document.querySelector('.js_info');
const countElement=document.querySelector('.js_count');
//contador de intentos
let timesCounter=0;

function getRandomNumber(max)  
{
  return (Math.ceil(Math.random() * max));
}
//número aleatorio entre 1 y 100
const numberRandom=getRandomNumber(100)+1;

function handleClickButton(event)
{
    event.preventDefault();
    timesCounter++;
    console.log('Número introducido: '+inputElement.value);
    console.log('Número aleatorio: '+numberRandom);
    console.log('Contador de intentos:'+timesCounter);

    //Contar los intentos
    countElement.innerHTML='Número de intentos: ' +timesCounter;

    const inputNumber=parseInt(inputElement.value);

    if ((inputNumber>100) || (inputNumber<0))
    {
        infoElement.innerHTML="Pista: El número debe estar entre 1 y 100";
    }
    else if (inputNumber===numberRandom )
    {
        infoElement.innerHTML="Has ganado campeona!!!";
        setInterval("location.reload()",2000);

    }
    else if (inputNumber>numberRandom )
    {
        infoElement.innerHTML="Pista: Demasiado alto.";
    }
    else
    {
        infoElement.innerHTML="Pista: Demasiado bajo.";
    }
    
}

buttonTest.addEventListener('click', handleClickButton);