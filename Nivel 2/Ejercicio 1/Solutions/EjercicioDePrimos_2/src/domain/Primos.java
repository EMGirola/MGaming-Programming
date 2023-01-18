package domain;

import java.util.ArrayList;
import java.util.Scanner;

public class Primos {

    final static int MAX_NUMBER = 501;
    static ArrayList<Integer> numerosPrimosPosta = new ArrayList<>();
    static int indice = 0;

    public static void main(String[] args) {

        var scanner = new Scanner(System.in);
        System.out.println("Escriba el numero a comprobar: ");
        var num = Integer.parseInt(scanner.nextLine());

        mostrarSiguientePrimo(num);
    }

    public static void listaDePrimos() {
        for (int i = 2; i < MAX_NUMBER; i++) {
            int contadorDeResto0 = 0;
            for (int j = 1; j <= i; j++) {
                if (i % j == 0) {
                    contadorDeResto0 += 1;
                }
                if (contadorDeResto0 > 2) {
                    break;
                }
            }
            if (contadorDeResto0 == 2) {
                numerosPrimosPosta.add(i);
            }
        }
    }

    public static void compruebaPrimo(int num) {

    }

    public static void mostrarSiguientePrimo(int num) {
        listaDePrimos();
        if (num >= 501 || num <= 1) {
            System.out.println("El numero ingresado no es valido, ingrese un numero entre 1 y 500");
            return;
        }

        if (numerosPrimosPosta.indexOf(num) == -1) {
            System.out.println(num + " No es primo, si no es primo no me interesa.");
            return;
        }
        indice = numerosPrimosPosta.indexOf(num);
        if (indice + 1 == numerosPrimosPosta.size()) {
            System.out.println(num + " es el ultimo numero primo de la lista.");
            return;
        }

        System.out.println("Siguiente primo = " + numerosPrimosPosta.get(indice + 1));

    }
}
