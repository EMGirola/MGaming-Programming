/*

    ## Solicitud

    Dado un usuario.
    Cuando ingrese un número primo.
    Entonces se debe mostrar por pantalla el siguiente numero primo.

    ## Criterios de Aceptación

    Se aprobará este ejercicio si:
    - El numero primo ingresado no puede ser mayor a 501.
    - El numero ingresado debe ser primo
    - Puede mostrar el siguiente numero primo.
    - El conjunto matematico de numeros a considedar es el de los numeros naturales


*/


const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero:  ", function(number) {
    if (number >= 501 || number <= 0) {
        console.log('El numero ingresado debe estar entre: 1 y 500');
        rl.close();
        return;
    }

    if (!esPrimo(number)) {
        console.log('No es primo, ingrese un numero primo');
        rl.close();
        return;
    }

    let siguientePrimo = encontrarSiguientePrimo(number);
    console.log('El siguiente numero primo es: '+ siguientePrimo);

    rl.close();
});


// Reutilizado del archivo MGaming-Programming\Nivel 1\Ejercicio 1\Solutions\Simple Approach NodeJS\exercise11.js

function esPrimo(number) {

    let realNumber = Number(number);


    // Si el numero esta entre los divisores, significa que es primo
    if ( realNumber == 2 
        || realNumber == 3 
        || realNumber == 5 
        || realNumber == 7 
        || realNumber == 11 
        || realNumber == 13
        ) {
        return true;
    }


    // Si el numero es divisible por cualquiera de estos, significa que no es primo
    if ( realNumber%2==0 
        || realNumber%3==0 
        || realNumber%5==0 
        || realNumber%7==0 
        || realNumber%11==0
        || realNumber%13==0 
        ) {
        return false;
    }


    // Al haber descartado todos los escenarios, llegados a este punto solo puede ser primo
    return true;
}


function encontrarSiguientePrimo(number) {
    let realNumber = Number(number) + 1;

    while(!esPrimo(realNumber)) {
        realNumber++;
    }

    return realNumber;
}