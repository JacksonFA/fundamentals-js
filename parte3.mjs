// PROMISES
let isResolved = true
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!isResolved) { reject('Promise rejected') }
    resolve('Promise resolved')
  }, 2000)
})

promise.then((response) => {
  console.log('PROMISE: ', response)
}).catch((error) => {
  console.log('PROMISE: ', error)
}).finally(() => {
  console.log('PROMISE: ', 'finally')
})

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

function teste() {
  return promise
}
let result = await teste()
console.log(result)

const promises = []
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Executando promise 1')
    resolve('Promise1 resolved')
  }, 2000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Executando promise 2')
    reject('Promise2 rejected')
  }, 2000)
})
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Executando promise 3')
    resolve('Promise3 resolved')
  }, 2000)
})
promises.push(promise1, promise2, promise3)

try {
  for await (const promise of promises) {
    console.log('FOR AWAIT TRY: ', promise)
  }
} catch (error) {
  console.log('FOR AWAIT CATCH: ', error)
}

promises.length = 0
for (let i = 1; i < 6; i++) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
  promises.push(response.json())
}

result = await Promise.all(promises)
const [first] = result
console.log(first)

//  ------------------------------------------------

// CLASSES / OBJETOS
const name = 'Arceno'
const age = 30

const pessoa = {
  name: 'Jackson',
  age: 27,
  isDev: true,
  greet() {
    console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos`)
  }
}
pessoa.greet()

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
const pessoaObj = new Pessoa('Jackson', 27, true)
pessoaObj.greet()
console.log(pessoaObj.name)

// ------------------------------------------------

//  SETs
console.log('ARRAY')
const arr = []
arr.push('Jackson')
arr.push(27)
arr.push(true)
console.log(arr)
console.log(arr.length)
console.log(arr.includes('Jackson'))
console.log(arr.splice(arr.findIndex((el) => el === 'Jackson'), 1))
arr.length = 0
console.log(arr)

console.log('SET')
const set = new Set()
set.add('Jackson')
set.add('Jackson')
set.add(27)
set.add(true)

console.log(set)
console.log(set.size)
console.log(set.has('Jackson'))
console.log(set.delete('Jackson'))
const it = set.values();
console.log(it.next().value)
console.log(it.next().value)
console.log(set.clear())
console.log(set)

//  MAPs
let propriedade = 20
const obj = {
  name: 'Jackson',
  age: 27,
  isDev: true,
  20: 'vinte'
}
// Object.keys(obj).forEach((key) => {
//   console.log(typeof key)
// })
console.log(obj)

const map = new Map()
map.set('name', 'Jackson')
map.set('age', 27)
map.set('isDev', true)
map.set(20, 'vinte')
map.set(obj, 'objeto')
// map.forEach((value, key) => {
//   console.log(typeof key)
// })
console.log(map.get('name'))
console.log(map.size)
console.log(map)

console.log(typeof map, typeof set)

//  ------------------------------------------------

// RECURSIVIDADE
function recursive(maxNumber) {
  console.log('Entrando na função')
  if (maxNumber >= 3) { return }
  maxNumber++
  console.log(maxNumber)
  recursive(maxNumber)
  console.log('Saindo da função')
}
recursive(0)

function traverseObject(obj, key) {
  console.log('ENTRANDO NA FUNÇÃO')
  for (const prop in obj) {
    if (typeof obj[prop] === 'object'){
      traverseObject(obj[prop], prop)
    } else {
      console.log(key ? key + '.' + prop : obj[prop])
    }
  }
  console.log('SAINDO DA FUNÇÃO')
}
const objPessoa = {
  name: 'Jackson',
  address: {
    street: 'Rua 1',
    number: 123,
  },
}
traverseObject(objPessoa)

console.log('fim dos exemplos!')