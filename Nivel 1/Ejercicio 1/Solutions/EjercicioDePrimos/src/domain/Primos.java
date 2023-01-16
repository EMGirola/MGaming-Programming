package domain;

import java.util.Scanner;

public class Primos {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Escriba el numero a comprobar: ");
        var num = Integer.parseInt(scanner.nextLine());
        mostrarPrimo(num);
    }
//    public static void mostrarPrimo(int num){
//        int numPrimos[] = {2, 3, 5, 7, 11, 13};
//        String resultado = " es primo";
//            for (int i = 0; i < numPrimos.length; i++) {
//                if (num != numPrimos[i] && num % numPrimos[i] == 0){
//                    resultado = " no es primo";
//                    break;
//                }
//            }
//            System.out.println(num + resultado);
//        
//    }
    
    // Muestra si el numero ingresado es alguno de los 6 primeros numeros primos
    public static void mostrarPrimo(int num){
        if(num == 2 || 
           num == 3 ||
           num == 5 ||
           num == 7 ||
           num == 11 ||
           num == 13){
           
            System.out.println(num + " es numero primo");
        }
        //Muestra si el numero al dividirse por los 6 primeros numeros primos tiene resto distinto de 0, es decir, es primo
        else if((num % 2 != 0) && 
                (num % 3 != 0) &&
                (num % 5 != 0) &&
                (num % 7 != 0) &&
                (num % 11 != 0) &&
                (num % 13 != 0)){    
            System.out.println(num + " es numero primo");
        }
        else {
            System.out.println(num + " no es numero primo");
        }
    }
}
