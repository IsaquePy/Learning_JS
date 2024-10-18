//O codigo abaixo até a linha 36 foi feito por uma IA , entao nao mereço creditos 
//nao fiz eu mesmo pois tenho um pouco de dificuldade de mecher com JSON e ainda
//nao estou tao avancado assim em JS
const fs = require('fs');

/**
 * Função que lê um arquivo .txt e retorna a lista já formatada.
 * @param {string} nomeArquivo - O nome do arquivo .txt que contém a lista.
 * @returns {Array} - Retorna a lista de arrays.
 */
function obterListaFormatada(nomeArquivo) {
    try {
        // Lê o arquivo de forma síncrona
        const data = fs.readFileSync(nomeArquivo, 'utf8');
        
        // Remove o texto "listamae" e espaços extras, deixando apenas a lista
        const conteudo = data.replace('listamae', '').trim();

        // Converte a string da lista para um array
        const lista = JSON.parse(conteudo);
        
        // Verifica se o resultado é um array
        if (Array.isArray(lista)) {
            return lista; // Retorna a lista formatada
        } else {
            throw new Error("O conteúdo do arquivo não é uma lista válida.");
        }
    } catch (error) {
        console.error("Erro: ", error.message);
        return null; // Retorna null em caso de erro
    }
}

// Exemplo de uso da função
var listamae = obterListaFormatada('dados.txt'); // Chama a função
console.log(listamae[0]); // Exibe a lista já formatada

var clientes = [['maria','unha',123] ,//  00 01 02
                ['carla','pe',563],//     10 11 12
                ['sofia','unha',984] , // 20 21 22
                ['ivani','pe',590]]//     30 31 32
num = 3
console.log(`O cliente é ${clientes[num][0]}, seu numero é ${clientes[num][2]} e quer fazer ${clientes[num][1]}`)