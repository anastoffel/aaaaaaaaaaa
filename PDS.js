const readlineSync = require("readline-sync");

const valor = Number(readlineSync.question("Insira um valor: "))

let maiorOuNao = (Math.PI * valor)

console.log("Seu valor é maior ou igual a 15? ", (maiorOuNao >= 15))