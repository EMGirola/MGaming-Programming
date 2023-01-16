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
            if(num != numPrimos[i] && num % numPrimos[i] == 0){
                return false;
            }
        }
        return true;
    }
    
    public static void mostrarPrimosAnteriores(int num){
        if(compruebaPrimo(num)){
            System.out.println("Numeros primos predecesores: ");
            for (int i = num -1; i > 1; i--) {
                    if(compruebaPrimo(i)){
                        System.out.println(i);
                    }
            }
        }
        else{
            System.out.println(num + " no es primo, no me interesa.");
        }
        
    }

        
//        }
//            else{
//                for (int j = num; j > 0; j--) {
//                    if(j == numPrimos[i] || j % numPrimos[i] != 0){
//                        System.out.println(j);
//                    }
//                }
//            }
//        }
        
//        for (int i = numPrimos.length - 1; i > 0; i--) {
//            if (num == numPrimos[i] && num % numPrimos[i] != 0) {
//                resultado = " no es primo, no me interesa";
//            }
//        }
//        System.out.println(num + resultado);



//    // Muestra si el numero ingresado es alguno de los 6 primeros numeros primos
//    public static void mostrarPrimo(int num){
//        if(num == 2 || 
//           num == 3 ||
//           num == 5 ||
//           num == 7 ||
//           num == 11 ||
//           num == 13){
//           
//            System.out.println(num + " es numero primo");
//        }
//        //Muestra si el numero al dividirse por los 6 primeros numeros primos tiene resto distinto de 0, es decir, es primo
//        else if((num % 2 != 0) && 
//                (num % 3 != 0) &&
//                (num % 5 != 0) &&
//                (num % 7 != 0) &&
//                (num % 11 != 0) &&
//                (num % 13 != 0)){    
//            System.out.println(num + " es numero primo");
//        }
//        else {
//            System.out.println(num + " no es numero primo");
//        }
//    }
}
