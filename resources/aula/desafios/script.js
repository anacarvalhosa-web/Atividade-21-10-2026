// function digaOla(){
//     return "Olá mundo";
// }
// let mensagem = digaOla()
 
// digaOla()
// digaOla()
// digaOla()
// function multiply(a, b) {
//   return a * b;
// }

//  let n1 = Number (prompt ("Digite o primeiro número")) 
//  let n2 = Number (prompt ("Digite o segundo número"))
//  let resultado = multiply(n1, n2) 
//  console.log(resultad
function multiply(a, b) {
  return a * b;
}
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return `O número ${numero} é PAR.`;
  } else {
    return `O número ${numero} é ÍMPAR.`;
  }
}

let numero = Number(prompt("Digite um número:"));
console.log(verificarParOuImpar(numero));
