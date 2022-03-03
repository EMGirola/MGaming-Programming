'''

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

def traer_numero_primo_anterior(numero):
    contador = 1
    numeros_primos_anteriores = []
    while (contador < numero):
        if (es_primo(contador)):
            numeros_primos_anteriores.append(contador)
        contador += 1
    return numeros_primos_anteriores

def es_numero_valido(numero):
    try:
        numero = transformar_string_a_int(numero)
    except Exception:
        return False
    if (numero < 1 or numero >= 237):
        return False
    return True

def transformar_string_a_int(numero):
    numero = int(numero)
    return numero

if __name__ == "__main__":
    numero = input("Ingrese un numero:  ")
    if (es_numero_valido(numero)) == False:
        print (f"El numero {numero} no es un numero valido para esta operacion, ingrese un numero entre 1 y 236 inclusive")
    else:
        numero = transformar_string_a_int(numero)
        if (es_primo(numero)):
            numeros_primos_anteriores = traer_numero_primo_anterior(numero)
            if numeros_primos_anteriores == []:
                print(f"No hay numeros primos anteriores a {numero}")
            else:
                print(f"Los numeros primos anteriores a {numero} son {numeros_primos_anteriores}")
        else:
            print(f"No es primo, si no es primo no me interesa")