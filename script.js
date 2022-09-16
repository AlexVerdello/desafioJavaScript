// //Con push y unshift se agregan items al array.
// //Con push se agregan al final
// //con unshift se agregan al principio

// const arr1 = ['item 1','item 2','item 3','item 4'];
// console.log(arr1)

// let pusheo = arr1.push('item 5');
// console.log(pusheo)
// console.log(arr1)

// let unshifteo = arr1.unshift('item 0')
// console.log(unshifteo)
// console.log(arr1)

// //Con pop y shift se eliminan items del array.
// //Con pop se eliminan del final 
// //Con shift se eliminan del principio

// let popeo = arr1.pop()
// console.log(popeo)
// console.log(arr1)

// let shifteo = arr1.shift()
// console.log(shifteo)
// console.log(arr1)

// /* Splice permite eliminar uno o varios elementos de un array en cualquier posicion. Funciona con dos parametros: El primero es el indice donde se ubica el metodo para trabajar, y el segundo la cantidad de elementos a eliminar desde esa posicion. */

// let spliceo = arr1.splice(1,2)
// console.log(spliceo)
// console.log(arr1)

// /* El metodo Join genera un string con todos los elementos del array, separados por el valor que pasamos por parametro  */
// let arr2 = [ 'item 0', 'item 1', 'item 2', 'item 3', 'item 4', 'item 5' ]
// let joineo = arr2.join(', ')
// console.log(joineo)
// console.log(arr2)


// /* El metodo concat se utiliza para concatenar arrays, sin modificar el array original. Creando uno nuevo  */


const objeto = {
    nombre: 'mate',
    precio: 300,
    color: 'rojo', 
    cantidad: 30
}
const objeto2 = {
    nombre: 'termo',
    precio: 3000,
    color: 'rojo', 
    cantidad: 10
}

const arrayObjetos = [];

arrayObjetos.push(objeto)
arrayObjetos.push(objeto2)

console.log(arrayObjetos)

let respuesta = arrayObjetos.filter(name => name.nombre == 'maste')
console.log(respuesta)