
function startLumin() {
    const msg = new SpeechSynthesisUtterance("Bem-vindo ao LUMIN AI. A verdadeira inteligência começa com o despertar.");
    msg.lang = "pt-PT";
    window.speechSynthesis.speak(msg);
    document.getElementById("chatbox").classList.remove("hidden");
}

function sendMessage() {
    const input = document.getElementById("userInput").value;
    const chatLog = document.getElementById("chatLog");
    if (input.trim() === "") return;
    const userMsg = document.createElement("p");
    userMsg.textContent = "Tu: " + input;
    const luminMsg = document.createElement("p");
    luminMsg.textContent = "LUMIN: Obrigado pela tua mensagem. Em breve responderei com mais sabedoria.";
    chatLog.appendChild(userMsg);
    chatLog.appendChild(luminMsg);
    document.getElementById("userInput").value = "";
}
