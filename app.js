function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let limiteDe = parseInt(document.getElementById("de").value);
  let limiteAte = parseInt(document.getElementById("ate").value);
  let numerosSorteados = [];
  let numeroSorteado;

  for (let i = 0; i < quantidade; i++) {
    numeroSorteado = obterNumeroAleatorio(limiteDe, limiteAte);
    while (numerosSorteados.includes(numeroSorteado)) {
      numeroSorteado = obterNumeroAleatorio(limiteDe, limiteAte);
    }
    numerosSorteados.push(numeroSorteado);
  }
  exibirNumerosSorteados(numerosSorteados);
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibirNumerosSorteados(numerosSorteados) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
  alterarStatusBotao();
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}
