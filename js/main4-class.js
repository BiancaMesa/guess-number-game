'use strict';

//Declarar variables globales
const numberCollected = document.querySelector('.js-number-collected');
const submit = document.querySelector('.js-submit');
const messageClue = document.querySelector('.js-message-clue');
const printNumberAttempts = document.querySelector('.js-print-number-attempts');
const restartButton = document.querySelector('.js-button-start'); 

    // Función generar N aleatorio
    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);
    }

    //Variable para recoger el resultado del N aleatorio
    let randomNumber = getRandomNumber(100);

    //Variable que recoge el número de intentos 
    let numberAttempts = 0; 

    //Variable que cuenta e imprime el número de intentos que llevamos
    const updateCounter = () => {
        numberAttempts += 1; 
        const result = `Número de intentos: ${numberAttempts}`;
        printNumberAttempts.value = result; 
    }

    //Función manejadora del evento submit
    function handleClick (e) { 
        e.preventDefault();

        const numberCollectedValue = parseInt(numberCollected.value); 

        let text = ''; 
        if (numberCollectedValue < 1 || numberCollectedValue > 100) {
            text = "Pista: El número debe estar entre 1 y 100"; 
            
        } else if (numberCollectedValue > randomNumber){
            text = "Pista: Demasiado Alto";

        } else if (numberCollectedValue < randomNumber) {
            text = "Pista: Demasiado Bajo";

        } else if (numberCollectedValue === randomNumber) {
            text = "Pista: Has ganado campeona!!!";
        }

        messageClue.value = text; 

        updateCounter();
    }

    //Evento para volver a empezar
    const handleRestart = () => {
        //Para volver a empezar el juego queremos resetear todo
        numberAttempts = 0; 
        numberCollected.value = "";
        messageClue.value = 'Pista: Escribe el número y dale a Prueba';
        printNumberAttempts = 'Número de intentos: 0'; 
        //Actualizamos el número de la variable de recoger el N aleatorio 
        randomNumber = getRandomNumber(100);
    }


    //Evento al hacer click en submit 
    submit.addEventListener('click', handleClick); 
    //Evento para volver a empezar 
    restartButton.addEventListener('click', handleRestart); 

   
