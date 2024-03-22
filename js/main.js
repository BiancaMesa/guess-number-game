'use strict';

//Declarar variables 
//const window = document.querySelector('.js-window');
const numberCollected = document.querySelector('.js-number-collected');
const numberCollectedValue = parseInt(numberCollected.value); 
const submit = document.querySelector('.js-submit');
const messageClue = document.querySelector('.js-message-clue');
const numberAttempts = document.querySelector('.js-number-attempts');



function handleLoadPage (event) {
    event.preventDefault(); 
    console.log('La página se ha cargado entera');

    // Función generar N aleatorio
    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
    }

    getRandomNumber(100);
    console.log(getRandomNumber(100));

    //console.log (numberCollectedValue);
    console.log(typeof numberCollectedValue);
}

// function handleClick () {

// }

// submit.addEventListener('click', handleClick); 




window.addEventListener('load', handleLoadPage); 
   