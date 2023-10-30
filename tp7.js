numero1 = parseInt(prompt('ingresa un numero'))
numero2 = parseInt(prompt('ingresa otro numero'))
numero3 = parseInt(prompt('ingresa un ultimo numero'))
if (numero1 > numero2 && numero1 > numero3 ) {
document.write('El numero más grande es ' + numero1)
}else if(numero2 > numero1 && numero2 > numero3) {
document.write('El numero más grande es ' + numero2)
}else {
    document.write('El numero más grande es ' + numero3)
}