function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino_crianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem_jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem_idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina_crianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher_jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher_adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.padding = '15px'
        img.style.borderRadius = '50%'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}