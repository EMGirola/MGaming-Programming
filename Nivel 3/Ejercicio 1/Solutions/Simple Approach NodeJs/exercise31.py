'''

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

'''

def es_primo(numero):
    contador = 1
    cantidad_de_veces_que_el_resto_de_la_division_da_cero = 0
    while (contador <= numero):
        if (numero % contador) == 0:
            cantidad_de_veces_que_el_resto_de_la_division_da_cero += 1
        contador += 1
    if cantidad_de_veces_que_el_resto_de_la_division_da_cero == 2:
        return True
    return False

def traer_numero_primo_siguiente(numero):
    contador = numero + 1
    numero_primo_siguiente = 0
    while (numero_primo_siguiente == 0):
        if (es_primo(contador)):
            numero_primo_siguiente = contador
        contador += 1
    return numero_primo_siguiente

def es_numero_valido(numero):
    try:
        numero = transformar_string_a_int(numero)
    except Exception:
        return False
    if (numero < 1 or numero >= 502):
        return False
    return True

def transformar_string_a_int(numero):
    numero = int(numero)
    return numero

if __name__ == "__main__":
    numero = input("Ingrese un numero:  ")
    if (es_numero_valido(numero)) == False:
        print (f"El numero {numero} no es un numero valido para esta operacion, ingrese un numero entre 1 y 501 inclusive")
    else:
        numero = transformar_string_a_int(numero)
        if (es_primo(numero)):
            numero_primo_siguiente = traer_numero_primo_siguiente(numero)
            print(f"El numero primo que le sigue a {numero} es {numero_primo_siguiente}")
        else:
            print(f"No es primo, si no es primo no me interesa")