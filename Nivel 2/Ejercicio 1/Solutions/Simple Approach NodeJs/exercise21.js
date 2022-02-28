/*

## Escenario:
    Dado que el usuario ingresa un numero
    Cuando el numero es primo
    Entonces el sistema debe mostrar por pantalla todos los numeros primos que precedan a ese numero

## Criterios de aceptación:
        - El numero ingresado debe ser primo
        - El conjunto matematico de numeros a considedar es el de los numeros naturales
        - El numero ingresado debe ser menor a 237
        - En caso de que no se encuentren numeros primos previos a ese numero, el sistema debe mostrar un mensaje de error por pantalla
        - Si el numero no es primo, debe mostrarse un error por pantalla que diga "No es primo, si no es primo no me interesa"

*/


const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero:  ", function(number) {
    let originTime = Date.now();


    if (number >= 237 || number <= 0) {
        console.log('El numero ingresado debe estar entre: 1 y 236');
        rl.close();
        return;
    }

    if (!esPrimo(number)) {
        console.log('No es primo, si no es primo no me interesa');
        rl.close();
        return;
    }

    let hasAnyNumber = false;


    for (let i = 1; i<=number; i++) {

        if (esPrimo(i)) {
            hasAnyNumber = true;
            console.log(i);
        }

    }


    console.log('Solución encontrada en: '+ (Date.now() - originTime)+ 'ms');


    if (!hasAnyNumber) {
        console.log('Error, no hay numeros primos anteriores a ese numero');
    }

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