// ===== QUIZ EDUCATIVO =====
// Confere as respostas marcadas e mostra a pontuação.

function verResultado() {
  var pontuacao = 0;

  var resposta1 = document.querySelector('input[name="pergunta1"]:checked');
  var resposta2 = document.querySelector('input[name="pergunta2"]:checked');
  var resposta3 = document.querySelector('input[name="pergunta3"]:checked');
  var resposta4 = document.querySelector('input[name="pergunta4"]:checked');
  var resposta5 = document.querySelector('input[name="pergunta5"]:checked');

  var areaResultado = document.getElementById("resultado-quiz");

  if (!resposta1 || !resposta2 || !resposta3 || !resposta4 || !resposta5) {
    areaResultado.innerText = "Responda todas as perguntas antes de ver o resultado.";
    return;
  }
  
  if (resposta1.value === "certa") {
    pontuacao = pontuacao + 1;
  }

  if (resposta2.value === "certa") {
    pontuacao = pontuacao + 1;
  }

  if (resposta3.value === "certa") {
    pontuacao = pontuacao + 1;
  }

  if (resposta4.value === "certa") {
    pontuacao = pontuacao + 1;
  }

  if (resposta5.value === "certa") {
    pontuacao = pontuacao + 1;
  }

  areaResultado.innerText = "Você acertou " + pontuacao + " de 5 perguntas!";
}
