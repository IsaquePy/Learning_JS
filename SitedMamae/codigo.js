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
var listamae = obterListaFormatada('exp.txt'); // Chama a função
console.log(listamae); // Exibe a lista já formatadaa