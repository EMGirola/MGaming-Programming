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
    let primeNumbers = [];

    for (let i = 1; i<=number; i++) {
        

        if (esPrimo(i)) {
            hasAnyNumber = true;
            primeNumbers.push(i);
        }

    }
    // Aunque el simple hecho de procesarlos no pesa, mostrarlos consume exageradamente mas tiempo
    // Por esto, si imprimimos la variable ya procesada, tardariamos la mitad del tiempo
    // Y si no realizaramos los saltos de linea, seria casi instanteneo
    // Se pueden comparar los tres casos comentando cada muestra
    console.log(primeNumbers);
    console.log(primeNumbers.join(' '));
    console.log(primeNumbers.join('\n'));


    if (!hasAnyNumber) {
        console.log('Error, no hay numeros primos anteriores a ese numero');
    }


    console.log('Solución encontrada en: '+ (Date.now() - originTime)+ 'ms');

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