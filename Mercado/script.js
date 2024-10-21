
function comp(id){
    var item = document.getElementById(id)
    var carrin = document.getElementById('carrinho')
    carrin.insertAdjacentHTML('beforeend',`<p>-${id}</p>`)
    item.remove(item)
}

function adicionar(){
    var nome = document.getElementById('nomei')
    var preco = document.getElementById('precoi')
    var url = document.getElementById('urli')
    var divprin = document.getElementById('principal')
    if(nome.value.length!=0 && preco.value.length!=0 && url.value.length!=0){
        divprin.insertAdjacentHTML('beforeend',`<div class="bloco" id="${nome.value}"><img src=${url.value} class="propaganda"><br><p>${nome.value}</p><p>Preço : R$${preco.value}/un/p><input type="button" value="Comprar" class="comprar" onclick="comp('${nome.value}')"></div>`)
        url.value=''
        nome.value=''
        preco.value=''
    }
}

function more(id) {
    const minhaDiv = document.getElementById(id);
    const alturaAtual = minhaDiv.clientHeight;
    const larguraAtual = minhaDiv.clientWidth;
    const novalargura = larguraAtual+20
    const novaAltura = alturaAtual + 20; // Aumenta 50 pixels (ajuste conforme necessário)
    minhaDiv.style.height =novaAltura + "px";
    minhaDiv.style.width = novalargura + "px"
}

function low(id) {
    const minhaDiv = document.getElementById(id);
    const alturaAtual = minhaDiv.clientHeight;
    const larguraAtual = minhaDiv.clientWidth;
    const novalargura = larguraAtual-20
    const novaAltura = alturaAtual - 20; // Aumenta 50 pixels (ajuste conforme necessário)
    minhaDiv.style.height =novaAltura + "px";
    minhaDiv.style.width = novalargura + "px"
}