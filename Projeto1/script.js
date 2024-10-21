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
console.log(listamae); // Exibe a lista já formatada
/**
 * Função que escreve uma string em um arquivo.
 * @param {string} nomeArquivo - O nome do arquivo onde a string será escrita.
 * @param {string} conteudo - O conteúdo que será escrito no arquivo.
 */
function devolver(nomeArquivo) {
    console.log("entro aq")
    var nome = document.getElementById('nome')
    console.log(nome.value)
    nome = nome.value
    var nvfilha = [nome , "pe" , 424]
    var conteudo = `listamae[["clienteI",0,3],[${nome},'pe' ,43]]`
    try {
        fs.writeFileSync(nomeArquivo, conteudo+`[${nome.value},pe,123]]`, 'utf8');
        console.log(`Conteúdo escrito no arquivo ${nomeArquivo} com sucesso.`);
    } catch (error) {
        console.error("Erro ao escrever no arquivo: ", error.message);
    }
}


// Chama a função devolver para escrever uma nova lista no arquivo

devolver('dados.txt', 'listamae[[2,4,6],[1,3,5]]'); // Exemplo de uso da função devolver
