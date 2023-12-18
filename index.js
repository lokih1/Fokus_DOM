const htmlBg = document.querySelector("html");
const bannerImg = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoCurto = document.querySelector(".app__card-button--curto");
const botaoLongo = document.querySelector(".app__card-button--longo");
const botaoAtivo = document.querySelectorAll(".app__card-button");
const altMusica = document.querySelector("#alternar-musica");
const começarPausar = document.querySelector("#start-pause");
const btComeçarPausar = document.querySelector("#start-pause span");
const começarPausarImg = document.querySelector(
  ".app__card-primary-butto-icon"
);
const tempoTela = document.querySelector("#timer");

const sons = new Audio("/sons/luna-rise-part-one.mp3");
const somPlay = new Audio("/sons/play.wav");
const somPause = new Audio("/sons/pause.mp3");
const somBeep = new Audio("/sons/beep.mp3");

let temporizador = 1500;
let intervaloId = null;

sons.loop = true;

altMusica.addEventListener("change", function () {
  if (sons.paused) {
    sons.play();
  } else {
    sons.pause();
  }
});

botaoFoco.addEventListener("click", function () {
  temporizador = 1500
  alterarContexto("foco");
  botaoFoco.classList.add("active");
});

botaoCurto.addEventListener("click", function () {
  temporizador = 300
  alterarContexto("descanso-curto");
  botaoCurto.classList.add("active");
});

botaoLongo.addEventListener("click", function () {
  temporizador = 900
  alterarContexto("descanso-longo");
  botaoLongo.classList.add("active");
});

function alterarContexto(contexto) {
  mostrarContagem()
  htmlBg.setAttribute("data-contexto", contexto);
  bannerImg.src = `/imagens/${contexto}.png`;
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;

      break;
    case "descanso-curto":
      titulo.innerHTML = `Otimize sua produtividade, mergulhe no que importa <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`;
      break;

    default:
      break;
  }
  botaoAtivo.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
}

const contagemRegressiva = () => {
  if (temporizador <= 0) {
    somBeep.play();
    alert("tempo finalizado");
    resetar();
    return;
  }
  temporizador -= 1;
  mostrarContagem();
};

começarPausar.addEventListener("click", iniciarPausar);

function iniciarPausar() {
  if (intervaloId) {
    somPause.play();

    resetar();
    return;
  }
  somPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
  btComeçarPausar.textContent = "Pausar";
  começarPausarImg.src = "/imagens/pause.png";
}

function resetar() {
  clearInterval(intervaloId);
  btComeçarPausar.textContent = "Começar";
  começarPausarImg.src = "/imagens/play_arrow.png";
  intervaloId = null;
}

function mostrarContagem() {
  const contagem = new Date (temporizador * 1000)
  const tempo = contagem.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
  tempoTela.innerHTML = `${tempo}`;
}

mostrarContagem()