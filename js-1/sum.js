function sum(number){
//Debe ser un numero positivo
if (number < 0 || typeof number != 'number'){
    return 'Debes usar un número positivo. ' + number + ' no es un numero positivo'
}
//creo arreglo vacio donde guardare todos los numeros
const numbers = []
//Itero sobre la misma cantidad de numeros para insertarlos en el arreglo
for (let i = 0; i < number ; i++){
    numbers.push(i+1)
}
//Creo un total que comienza en 0
let total = 0
//Itero sobre el arreglo de numeros para generar el total
numbers.forEach( number => {total += number})
// Formateo la cadena de numeros que actualmente estan separados con "," y con la ayuda el string method "replace" y una expresion regular global "/,/g"
// reemplazo las comas con el sigo +
const numerosFormateadosConMas = numbers.toString().replace(/,/g , ' + ')
return `${numerosFormateadosConMas} = ${total} `
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120
console.log(sum(-1))// Ejemplo con un número negativo
console.log(sum('test')) // Ejemplo con un tipo de dato diferente a número 