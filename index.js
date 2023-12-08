const htmlBg = document.querySelector("html");
const bannerImg = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoCurto = document.querySelector(".app__card-button--curto");
const botaoLongo = document.querySelector(".app__card-button--longo");
const botaoAtivo = document.querySelectorAll(".app__card-button");
const altMusica = document.querySelector("#alternar-musica")
const sons = new Audio("/sons/luna-rise-part-one.mp3")

sons.loop = true

altMusica.addEventListener("change", function () {
    if (sons.paused) {
        sons.play()
    } else {
        sons.pause()
    }
})

botaoFoco.addEventListener("click", function () {
  alterarContexto('foco')
  botaoFoco.classList.add('active')
})

botaoCurto.addEventListener("click", function () {
    alterarContexto('descanso-curto')
    botaoCurto.classList.add('active')
})

botaoLongo.addEventListener("click", function () {
    alterarContexto('descanso-longo')
    botaoLongo.classList.add('active')
})

function alterarContexto (contexto) {
    htmlBg.setAttribute("data-contexto", contexto )
    bannerImg.src = `/imagens/${contexto}.png`
    switch (contexto) {
        case "foco":
            titulo.innerHTML =     `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            
            break;
        case "descanso-curto":
            titulo.innerHTML = `Otimize sua produtividade, mergulhe no que importa <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            
            break;
        case "descanso-longo": 
         titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>` 
            break;
            
         default:
            break;
    }
    botaoAtivo.forEach(function(contexto) {
        contexto.classList.remove('active')

    }) 

    }

