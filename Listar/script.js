var itens = []
c=0
function add(){
    //Aumentando!
    const minhaDiv = document.getElementById("clique");
    const alturaAtual = minhaDiv.clientHeight;
    const novaAltura = alturaAtual + 50; // Aumenta 50 pixels (ajuste conforme necessário)
    var nome = document.getElementById('nome')
    var nm = ''
    minhaDiv.style.borderRadius= 4+"%"
    minhaDiv.style.height = novaAltura + "px";
    minhaDiv.style.textAlign= 'center';
    minhaDiv.style.textAlign='center';
    //Adicionando Lista!
    itens.push(nome.value)
    
    minhaDiv.insertAdjacentHTML('beforeend',`<br>${c}-${itens[c]}`)
    minhaDiv.insertAdjacentHTML('beforeend',`<div class='newdata'>${nome.value}</div>`)
    c++
    nome.value=''

}