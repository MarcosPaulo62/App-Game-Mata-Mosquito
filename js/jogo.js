var altura = window.innerHeight
var largura = window.innerWidth
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

// Pega somente o que está após o ? da url e retira o ? que vem junto 
var nivel = (window.location.search).replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}

var cronometro = setInterval(function() {
    tempo--

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);

function posicaoRandomica() {

    // remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas <= 3){
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        } else { 
            // interomper o jogo - Game Over
            window.location.href = 'fim_de_jogo.html'
        }
        
    }


    // Gera um número aleatório menor que a largura, sem encostar nas
    // bordas e sem casas decimais
    var posicaoX = Math.floor(Math.random() * largura) - 90
    // Gera um número aleatório menor que a altura, sem encostar nas 
    // bordas e sem casas decimais
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px' 
    mosquito.style.top = posicaoY + 'px' 
    mosquito.style.position = 'absolute' 
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1' // return retorna e termina a função
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
