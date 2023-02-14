'use strict'
const button=document.querySelector('.js_button');
const inputElement=document.querySelector('.js_input');
const infoElement=document.querySelector('.js_info');
const countElement=document.querySelector('.js_count');

function getRandomNumber(max)  
{
  return (Math.ceil(Math.random() * max));
}


function handleClickButton(event){
    event.preventDefault();
    console.log(inputElement.value);
    console.log(numberRandom);
    const inputNumber=parseInt(inputElement.value);
    if ((inputNumber>100) && (inputNumber<0))
    {
        infoElement.innerHTML="El número debe estar entre 1 y 100";
    }else if (inputNumber===numberRandom )
        {
            infoElement.innerHTML="Has ganado campeona";
        }
    else if (inputNumber>numberRandom )
    {
        infoElement.innerHTML="Demasiado alto";
    }
    else
    {
        infoElement.innerHTML="Demasiado bajo";
    }
    
}
//número aleatorio entre 1 y 100
const numberRandom=getRandomNumber(100)+1;
button.addEventListener('click', handleClickButton);