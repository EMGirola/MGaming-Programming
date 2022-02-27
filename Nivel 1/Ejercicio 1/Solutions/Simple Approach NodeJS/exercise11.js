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