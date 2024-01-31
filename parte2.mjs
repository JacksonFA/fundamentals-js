// ESTRUTURAS CONDICIONAIS
const a = 10
const b = 12
const c = 14

if (a) {
  console.log('a é diferente de 0, portanto verdadeiro')
} else {
  console.log('a é igual a 0, portanto falso')
}

if (a === b) {
  console.log('a é igual a b')
} else {
  console.log('a é diferente de b')
}

if (a === b) {
  console.log('a é igual a b')
} else if (a === c) {
  console.log('a é igual a c')
} else {
  console.log('a é diferente de b e c')
}

// if (a === b) {
//   isEqual = b
// } else {
//   isEqual = c
// }
const isEqual = a === b ? b : c
console.log(isEqual)

const d = '10'
switch (d) {
  case a:
    console.log('D é igual a A')
    break
  case b:
    console.log('D é igual a B')
    break
  case c:
    console.log('D é igual a C')
    break
  default:
    console.log('D não é igual a A, B ou C')
}

//  ------------------------------------------------

// FUNÇÕES
const arr = [5, 5, 3]
console.log(sum1(5, 5))
console.log(sum1(...arr))

function sum1(a, b) {
  return a + b
}

const sum2 = (a, b) => a + b
console.log(sum2(5, 5))
console.log(sum2(...arr))

//  ------------------------------------------------

//  ESTRUTURAS DE REPETIÇÃO
// const { randomInt } = require('node:crypto') // CommonJS
import { randomInt } from 'node:crypto' // ES Modules

// WHILE
let e = 0
while (e < 5) {
  console.log('while: ', e)
  e = e + randomInt(5)
}

// DO WHILE
let f = 0
do {
  console.log('doWhile: ', f)
  f = f + randomInt(5)
} while (f < 5)

// FOR
const array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
  console.log('for: ', array[i])
}

let g = 0
function increment() {
  console.log('increment', g)
  g = g + randomInt(5)
}
for (g; g < 5; increment()) {
  console.log('for2: ', g)
}
g = 0
for (g; g < 10; increment());

const obj = {
  name: 'Jackson',
  age: 27,
  isDev: true,
}
const obj2 = {
  __proto__: obj, // herdando propriedades(chaves/valores) do obj
  teste: 'teste',
}
for (const key in obj2) {
  if (!obj2.hasOwnProperty(key)) {
    console.log('forIn:', key)
    continue
  }
  console.log('forIn:', key, obj2[key])
}

for (const value of array) {
  console.log('forOf:', value)
}
console.log(array)
const array2 = array.forEach((value) => (value % 2 !== 0))
console.log(array2)

//  ------------------------------------------------

console.log('fim dos exemplos!')
