/* Crie uma HOF que receberá três parâmetros:

O primeiro será um array de respostas corretas (soluções);

O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

O terceiro é uma função que compara os dois arrays 
e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

Uma resposta correta adiciona 1 ponto à pontuação final;

A ausência de uma resposta não altera a pontuação (quando for “N.A”);

Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:*/

const correctAnswer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswer = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (arr1, arr2) => {
    let notaFinal;
    for(let i = 0; i < arr1.length; i += 1) {
        for(let idx = 0; idx < arr2.length; idx += 1) {   
            if (arr1[i] === arr2[0]) {
                notaFinal += 1;
            } else if (arr1[i] === 'N.A') {
                notaFinal = notaFinal;
            } else {
                notaFinal -= 0.5;
            }
        }
       
    }

    

    return notaFinal;
}

console.log(checkAnswers(studentAnswer, correctAnswer))

/* const hof = (correct, answers, calback) => {

}
 */
