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

const PRIME_NUMBERS = new Set([2,3,5,7,11,13]);

function esPrimo(number) {
    // Si el numero esta entre los divisores, significa que es primo
    let realNumber = Number(number);

    if (PRIME_NUMBERS.has(realNumber)) {
        return true;
    }

    let esPrimo = true;

    // Si el numero es divisible por cualquiera de estos, significa que no es primo
    for (const PRIME of PRIME_NUMBERS) {
        if (realNumber%PRIME==0) {
            esPrimo = false;
        }
    }


    // Al haber descartado todos los escenarios, llegados a este punto solo puede ser primo
    return esPrimo;
}


function encontrarSiguientePrimo(number) {
    let realNumber = Number(number) + 1;
    if (!esPrimo(realNumber)) {
        return encontrarSiguientePrimo(realNumber);
    }
    else {
        return realNumber;
    }

}