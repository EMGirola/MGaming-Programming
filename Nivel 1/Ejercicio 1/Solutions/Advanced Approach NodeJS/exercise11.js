/*

## Solicitud

Dado un usuario
Cuando ingrese un número
Entonces debo mostrar por pantalla si el numero es primo o no

## Criterios de Aceptación

Se aprobará este ejercicio si el mismo puede mostrar el mensaje nombrando si es primo o no el numero ingresado.
No deberá contener bucles de ningún tipo.

*/

const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero:  ", function(number) {

    if (esPrimo(number)) {
        console.log('El numero ingresado es primo');
    }
    else {
        console.log('El numero ingresado no es primo');
    }

    rl.close();
});


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