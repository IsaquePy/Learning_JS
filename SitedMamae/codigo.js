const fs = require('fs');

/**
 * Função que lê um arquivo .txt e retorna a lista já formatada.
 * @param {string} nomeArquivo - O nome do arquivo .txt que contém a lista.
 * @returns {Promise<Array>} - Retorna uma promessa com a lista de arrays.
 */
function obterListaFormatada(nomeArquivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nomeArquivo, 'utf8', (err, data) => {
            if (err) {
                reject("Erro ao ler o arquivo: " + err);
                return;
            }

            // Remover o texto "listamae" e espaços extras, deixando apenas a lista
            const conteudo = data.replace('listamae', '').trim();

            // Tentar converter a string da lista para um array
            try {
                const lista = JSON.parse(conteudo);
                
                // Verifica se o resultado é um array
                if (Array.isArray(lista)) {
                    resolve(lista); // Retornar a lista formatada
                } else {
                    reject("O conteúdo do arquivo não é uma lista válida.");
                }
            } catch (e) {
                reject("Erro ao converter o conteúdo do arquivo para lista: " + e);
            }
        });
    });
}

// Exemplo de uso da função
(async () => {
    try {
        // Chama a função e atribui o resultado à variável listamae
        var listamae = await obterListaFormatada('exp.txt');
        console.log(listamae); // Exibe a lista já formatada
    } catch (error) {
        console.error(error);
    }
})();