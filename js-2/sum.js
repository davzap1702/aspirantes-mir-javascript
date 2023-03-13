//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

function sum(array) {
    let total = 0;
    array.forEach(item => {
        total = total + item
    })
    return total
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

//Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined

function max(array) {
    if (array.length === 0) {
        return undefined
    }
    let maxNumber = 0
    array.forEach(item => {
        if (item > maxNumber) {
            maxNumber = item
        }
    })
    return maxNumber
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined 

//Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.

function maxIndex(array) {
    let maxNumber = 0
    let maxNumberIndex = 0
    if (array.length === 0) {
        return -1
    }
    array.forEach(item => {
        if (item > maxNumber) {
            maxNumber = item
            maxNumberIndex = array.indexOf(item)
        }
    })
    return maxNumberIndex

}

console.log(maxIndex([1, 3, 2])) // => index 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
console.log(maxIndex([])) // => -1 

//Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.

function join(array) {
    let result;
    //pasar el array a String
    const convertedArray = array.toString()
    //remplazar las comas por espacios
    result = convertedArray.replace(/,/g , ' ')
    return result
}

console.log(join(['Esto', 'es', 'un', 'texto', 'de', 'prueba']))
console.log(join([20, 68, 2, 'es', 'la', 'clave']))
console.log(join(['Separame', 'por', 'espacios']))