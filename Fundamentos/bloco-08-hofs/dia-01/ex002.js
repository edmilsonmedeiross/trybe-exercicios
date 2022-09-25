/* Sorteador de loteria
//Desenvolva uma HOF que retorna o resultado de um sorteio.//
 Esta HOF irá gerar um número aleatório entre 1 e 5
recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).
 */

const checkNum = (num, randonNumber) => {
    if (num === randonNumber) {
        return `“Parabéns você ganhou”`
    } else {
        return `“Tente novamente”`
    }
}

const hof = (num, calback) => {
    const randonNumber = Math.round((Math.random() * 4) + 1)

    console.log(randonNumber);

    return calback(num, randonNumber);   
}

console.log(hof(5, checkNum));
