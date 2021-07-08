window.addEventListener("load", () => {
    // Tempo, em segundos, inicial
    let sec = 120;

    // Obtém o elemento "timer" da página HTML
    const countDiv = document.getElementById("timer");

    // Função para atualizar o tempo
    const secPass = () => {
        // Separa minutos e segundos
        let min = Math.floor(sec/60);
        let secRemaining = sec%60;

        // Adiciona um 0 à esquerda para fins de formatação
        if(secRemaining < 10)
            secRemaining = "0"+secRemaining;
        if(min < 10)
            min = "0"+min;

        // Insere o valor no HTML
        countDiv.innerHTML = min+":"+secRemaining;

        // Atualiza o tempo em segundos
        if(sec > 0)
            sec--;
        else countDiv.innerHTML = "Tempo esgotado!";
    };

    // Executa a função secPass a cada 1000 milissegundos
    const countDown = setInterval(() => secPass(), 1000);
});