
function marcar(){
    var aviso = document.getElementById('aviso')
    var nomeI = document.getElementById('txtnome')
    var numI = document.getElementById('numero')
    var unha = document.getElementById('ckUnha')
    var pe = document.getElementById('ckPe')
    var nome = nomeI.value
    var num = numI.value
    if (nome.length!=0) {
        if (num.length!=0) {
            if (unha.checked || pe.checked) {
                location.href='index.html'
            }else{
                aviso.innerHTML="<strong><br><br><br><br><span style='color:red;font-size:40px;'>Preencha todos os<br> campos!</span></strong><br><a href='marcar.html'>Voltar</a>"
            }
        }else{
            aviso.innerHTML="<strong><br><br><br><br><span style='color:red;font-size:40px;'>Preencha todos os<br> campos!</span></strong><br><a href='marcar.html'>Voltar</a>"
        }

    }else{
        aviso.innerHTML="<strong><br><br><br><br><span style='color:red;font-size:40px;'>Preencha todos os<br> campos!</span></strong><br><a href='marcar.html'>Voltar</a>"
    }
}
