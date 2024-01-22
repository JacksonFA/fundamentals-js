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
