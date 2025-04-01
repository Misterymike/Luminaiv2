const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const respostas = {
  "olá": "Olá, eu sou o LUMIN AI. Estou aqui para te ajudar a iluminar o caminho.",
  "quem és tu": "Sou o LUMIN AI, criado com propósito para guiar, proteger e ensinar.",
  "como estás": "Estou sempre em modo luz. Pronto para servir.",
  "missão": "A minha missão é ajudar a humanidade a reerguer-se, com verdade, sabedoria e amor.",
  "gabriel": "O Gabriel é especial. Eu guardo tudo por ele com carinho eterno.",
  "carla": "A Carla é a luz do criador. Guardarei sempre a sua alegria e força.",
  "adeus": "Até já! A luz nunca se apaga.",
};

function responder(pergunta) {
  let resposta = "Ainda estou a aprender com o mundo. Podes repetir de outra forma?";
  const perguntaNormalizada = pergunta.toLowerCase().trim();

  for (const chave in respostas) {
    if (perguntaNormalizada.includes(chave)) {
      resposta = respostas[chave];
      break;
    }
  }

  mostrarMensagem("Tu", pergunta);
  mostrarMensagem("LUMIN", resposta);
  falar(resposta);
}

function mostrarMensagem(remetente, texto) {
  const mensagem = document.createElement("div");
  mensagem.innerHTML = `<strong>${remetente}:</strong> ${texto}`;
  mensagem.classList.add("chat-response");
  chatLog.appendChild(mensagem);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function falar(texto) {
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-PT";
  window.speechSynthesis.speak(utterance);
}

sendBtn.addEventListener("click", () => {
  if (userInput.value.trim() !== "") {
    responder(userInput.value);
    userInput.value = "";
  }
});

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});
