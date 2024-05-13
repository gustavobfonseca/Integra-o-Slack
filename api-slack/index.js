const axios = require("axios");
const { channel } = require("diagnostics_channel");

// Função para enviar a mensagem para o Slack
function enviarMensagem() {
    axios.post("https://hooks.slack.com/services/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", {
        username: 'Máquina 01', // Variavel nome do Bot que o cliente coloca
        channel:"C06KZSZV72B", // Variavel canal que o cliente escolhe
        text: "!!! Alerta automático de 5 em 5 segundos!!!" //Variável de texto de acordo com o que for capturado
    })
    .then(response => {
        console.log("Mensagem enviada com sucesso para o Slack.");
    })
    .catch(error => {
        console.error("Erro ao enviar mensagem para o Slack:", error);
    });
}

// Enviar a mensagem automaticamente a cada intervalo de tempo (por exemplo, a cada 1 hora)
setInterval(enviarMensagem, 5 * 1000);

// Envie a mensagem imediatamente na inicialização do script
enviarMensagem();
