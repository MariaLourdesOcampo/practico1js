numero = parseInt(prompt('ingresa un numero'))
if(numero === 0){
    document.write('El numero ' + numero + ' no es divisible en 2 ni en ningun numero')
}else if (numero % 2 === 0){
    document.write('El numero ' + numero + ' es divisible en 2')
}else {
    document.write('El numero ' + numero + ' no es divisible en 2')
}