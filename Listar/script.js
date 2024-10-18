var itens = []
c=0

function add(){
    //Aumentando!
    const minhaDiv = document.getElementById("clique");
    const alturaAtual = minhaDiv.clientHeight;
    const novaAltura = alturaAtual + 50; // Aumenta 50 pixels (ajuste conforme necessário)
    var nome = document.getElementById('nome')
    var sele = document.getElementById('selec')
    var nm = ''
    minhaDiv.style.borderRadius= 4+"%"
   
    minhaDiv.style.textAlign= 'center';
    minhaDiv.style.textAlign='center';
    //Adicionando Lista!
    itens.push(nome.value)
    if (nome.value!='') {
        minhaDiv.insertAdjacentHTML('beforeend',`<div class='newdata' id="${c}">${nome.value}<button onclick="retirar(${c})" style='background-color:red;'>Atendido</button></div><br>`)
        minhaDiv.style.height =novaAltura + "px";
    }
    nome.value=''
    c++
}
function retirar(id){
    const minhaDiv = document.getElementById("clique")
    const alturaAtual = minhaDiv.clientHeight;;
    const novaAltura = alturaAtual - 50
    var retirado = document.getElementById(id)
    retirado.style.background='blue'
    retirado.remove(retirado);
    minhaDiv.style.lineHeight='10px';
    minhaDiv.style.textAlign= 'center';
    minhaDiv.style.textAlign='center';
    minhaDiv.style.height = novaAltura +"px";
    
}