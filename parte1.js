// VARIÁVEIS
var variavel1 = 3
let variavel2 = 4
const constante = 5
console.log(variavel1, variavel2, constante)

//  ------------------------------------------------
// TIPOS DE DADOS
const name = 'Jackson' // string
const age = 27 // number
const notNumber = Number(name) // not a number
const isDev = true // boolean
const dogs = [ 'Bonnie', 'Jully' ] // array(object)
const obj = {
  name: 'Jackson',
  age: 27,
  isDev: false,
} // object
const nullValue = null // object
const undefinedValue = undefined // undefined
const symbol = Symbol('qualquer-symbol') // symbol

console.log(
  typeof name,
  typeof age,
  typeof notNumber,
  typeof isDev,
  typeof dogs,
  typeof obj,
  typeof nullValue,
  typeof undefinedValue,
  typeof symbol
)
console.log(
  name,
  age,
  notNumber,
  isDev,
  dogs,
  obj,
  nullValue,
  undefinedValue,
  symbol
)

//  ------------------------------------------------

// CONCATENAÇÃO -> INTERPOLAÇÃO (TEMPLATE LITERALS)
console.log('Olá, meu nome é ' + name + ' e eu tenho ' + age + ' anos')
console.log(`Olá, meu nome é ${name} e eu tenho ${age} anos`)

//  ------------------------------------------------

// OPERADORES ARITMÉTICOS
const a = 10
const b = 8
console.log('a = ', a, 'b = ', b)
console.log('soma = ', a + b)
console.log('subtração = ', a - b)
console.log('multiplicação = ', a * b)
console.log('divisão = ', a / b)
console.log('módulo/resto = ', a % b)
console.log('exponenciação = ', a ** b)
console.log('exponenciação = ', Math.pow(a, b))
console.log('raiz quadrada = ', Math.sqrt(a))

//  ------------------------------------------------

// OPERADORES DE COMPARAÇÃO
const c = 2
const d = '2'
console.log('c = ', c, 'd = ', d)
console.log('c > d = ', c > d)
console.log('c < d = ', c < d)
console.log('c >= d = ', c >= d)
console.log('c <= d = ', c <= d)
console.log('c == d = ', c == d)
console.log('c === d = ', c === d)
console.log('c != d = ', c != d)
console.log('c !== d = ', c !== d)

//  ------------------------------------------------

// OPERADORES LÓGICOS
const e = true
const f = false
console.log('e = ', e, 'f = ', f)
console.log('e && f = ', e && f)
console.log('e || f = ', e || f)
console.log('!e = ', !e)
console.log('!f = ', !f)

const teste = null ?? 'Teste'
console.log('teste =', teste)

//  ------------------------------------------------

// SPREAD OPERATOR
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const obj1 = {
  name: 'Jackson',
  age: 27,
}
const obj2 = {
  ...obj1,
  name: 'João',
}
console.log(obj1)
console.log(obj2)

//  ------------------------------------------------
