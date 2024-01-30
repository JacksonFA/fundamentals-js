// // ESTRUTURAS CONDICIONAIS
// const a = 10
// const b = 12
// const c = 14

// if (a) {
//   console.log('a é diferente de 0, portanto verdadeiro')
// } else {
//   console.log('a é igual a 0, portanto falso')
// }

// if (a === b) {
//   console.log('a é igual a b')
// } else {
//   console.log('a é diferente de b')
// }

// if (a === b) {
//   console.log('a é igual a b')
// } else if (a === c) {
//   console.log('a é igual a c')
// } else {
//   console.log('a é diferente de b e c')
// }

// // if (a === b) {
// //   isEqual = b
// // } else {
// //   isEqual = c
// // }
// const isEqual = a === b ? b : c
// console.log(isEqual)

// const d = '10'
// switch (d) {
//   case a:
//     console.log('D é igual a A')
//     break
//   case b:
//     console.log('D é igual a B')
//     break
//   case c:
//     console.log('D é igual a C')
//     break
//   default:
//     console.log('D não é igual a A, B ou C')
// }

// //  ------------------------------------------------

// // FUNÇÕES
// const arr = [5, 5, 3]
// console.log(sum1(5, 5))
// console.log(sum1(...arr))

// function sum1(a, b) {
//   return a + b
// }

// const sum2 = (a, b) => a + b
// console.log(sum2(5, 5))
// console.log(sum2(...arr))

// //  ------------------------------------------------

// //  ESTRUTURAS DE REPETIÇÃO
// // const { randomInt } = require('node:crypto') // CommonJS
// import { randomInt } from 'node:crypto' // ES Modules

// // WHILE
// let e = 0
// while (e < 5) {
//   console.log('while: ', e)
//   e = e + randomInt(5)
// }

// // DO WHILE
// let f = 0
// do {
//   console.log('doWhile: ', f)
//   f = f + randomInt(5)
// } while (f < 5)

// // FOR
// const array = [1, 2, 3, 4, 5]
// for (let i = 0; i < array.length; i++) {
//   console.log('for: ', array[i])
// }

// let g = 0
// function increment() {
//   console.log('increment', g)
//   g = g + randomInt(5)
// }
// for (g; g < 5; increment()) {
//   console.log('for2: ', g)
// }
// g = 0
// for (g; g < 10; increment());

// const obj = {
//   name: 'Jackson',
//   age: 27,
//   isDev: true,
// }
// const obj2 = {
//   __proto__: obj, // herdando propriedades(chaves/valores) do obj
//   teste: 'teste',
// }
// for (const key in obj2) {
//   if (!obj2.hasOwnProperty(key)) {
//     console.log('forIn:', key)
//     continue
//   }
//   console.log('forIn:', key, obj2[key])
// }

// for (const value of array) {
//   console.log('forOf:', value)
// }
// console.log(array)
// const array2 = array.forEach((value) => (value % 2 !== 0))
// console.log(array2)

// //  ------------------------------------------------

// // PROMISES
// let isResolved = true
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (!isResolved) { reject('Promise rejected') }
//     resolve('Promise resolved')
//   }, 2000)
// })

// promise.then((response) => {
//   console.log('PROMISE: ', response)
// }).catch((error) => {
//   console.log('PROMISE: ', error)
// }).finally(() => {
//   console.log('PROMISE: ', 'finally')
// })

// async function teste() {
//   try {
//     const result = await promise
//     console.log('AWAIT: ', result)
//   } catch (error) {
//     console.log('AWAIT: ', error)
//   } finally {
//     console.log('AWAIT: ', 'finally')
//   }
// }

// await teste()

// function teste() {
//   return promise
// }
// let result = await teste()
// console.log(result)

// const promises = []
// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Executando promise 1')
//     resolve('Promise1 resolved')
//   }, 2000)
// })
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Executando promise 2')
//     reject('Promise2 rejected')
//   }, 2000)
// })
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('Executando promise 3')
//     resolve('Promise3 resolved')
//   }, 2000)
// })
// promises.push(promise1, promise2, promise3)

// try {
//   for await (const promise of promises) {
//     console.log('FOR AWAIT TRY: ', promise)
//   }
// } catch (error) {
//   console.log('FOR AWAIT CATCH: ', error)
// }

// promises.length = 0
// for (let i = 1; i < 6; i++) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
//   promises.push(response.json())
// }

// result = await Promise.all(promises)
// const [first] = result
// console.log(first)

// //  ------------------------------------------------

// CLASSES / OBJETOS
// const name = 'Arceno'
// const age = 30

// const pessoa = {
//   name: 'Jackson',
//   age: 27,
//   isDev: true,
//   greet() {
//     console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos`)
//   }
// }
// pessoa.greet()

class Pessoa {
  static name = 'Arceno'
  static age = 27
  #isDev // propriedade privada

  constructor(name, age, isDev) {
    this.name = name
    this.age = age
    this.#isDev = isDev
  }

  static staticGreet() {
    (() => {
      console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos`)
    })()
  }

  greet() {
    (() => {
      console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos`)
    })()
  }
}

Pessoa.staticGreet()
const pessoa = new Pessoa('Jackson', 27, true)
pessoa.greet()
console.log(pessoa.name)

// ------------------------------------------------

console.log('fim dos exemplos!')
