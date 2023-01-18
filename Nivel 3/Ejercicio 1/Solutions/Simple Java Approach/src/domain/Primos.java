package domain;

import java.util.Scanner;

public class Primos {

    static int numPrimos[] = {2, 3, 5, 7, 11, 13};

    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Escriba el numero a comprobar: ");
        var num = Integer.parseInt(scanner.nextLine());
        mostrarPrimosAnteriores(num);
    }

    /* Primero, debe comprobar que el numero ingresado sea primo, si no es primo, debe frenarse y mostrar "No es primo, no me interesa". 
    Segundo, dado que el numero ingresado sea primo debe comprobar cuales de todos los numeros menores a él hasta 0 son primos e imprimirlos.
     */
    public static boolean compruebaPrimo(int num) {
        for (int i = 0; i < numPrimos.length; i++) {
            if (num != numPrimos[i] && num % numPrimos[i] == 0) {
                return false;
            }
        }
        return true;
    }

    public static void mostrarPrimosAnteriores(int num) {
        if (num > 236 || num <= 1) {
            System.out.println("El numero ingresado no es valido, ingrese un numero entre 1 y 236");
            return;
        }
        if (num == 2) {
            System.out.println("El numero ingresado no tiene numeros primos anteriores");
            return;
        }
        if (!compruebaPrimo(num)) {
            System.out.println(num + " No es primo, si no es primo no me interesa.");
            return;
        }
        System.out.println("Numeros primos predecesores: ");
        for (int i = num - 1; i > 1; i--) {
            if (compruebaPrimo(i)) {
                System.out.println(i);

            }
        }
    }
}
