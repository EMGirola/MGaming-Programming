'''

## Solicitud

Dado un usuario
Cuando ingrese un número
Entonces debo mostrar por pantalla si el numero es primo o no

## Criterios de Aceptación

Se aprobará este ejercicio si el mismo puede mostrar el mensaje nombrando si es primo o no el numero ingresado.
No deberá contener bucles de ningún tipo.

'''

def es_primo(numero):
    if numero == 2 or numero == 3 or numero == 5 or numero == 7 or numero == 11 or numero == 13:
        return True
    return False


if __name__ == "__main__":
    numero = input("Ingrese un numero:  ")
    numero = int(numero)
    if (es_primo(numero)):
        print(f"El numero {numero} es primo")
    else:
        print(f"El numero {numero} NO es primo")