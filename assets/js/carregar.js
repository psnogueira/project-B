const tarefas = JSON.parse(localStorage.getItem("tarefas"));

tarefas.forEach(tarefa => {
    console.log(tarefa);
    card(tarefa);
});

function card(tarefa) {

    // Template literals.
    const content = `
        <div class="nes-container with-title is-centered">
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            <a href="#" class="nes-badge is-icon">
                <span class="is-succes"><i class="nes-icon star is-small"></i></span>
                <span class="is-primary">${tarefa.pontos}</span>
            </a>

            <progress class="nes-progress is-success" value="10" max="100"></progress>

            <button type="button" class="nes-btn is-primary">-</button>
            <button type="button" class="nes-btn is-error">apagar</button>
            <button type="button" class="nes-btn is-primary">+</button>
        </div>
        `

    const card = document.createElement("div");
    card.innerHTML = content;

    document
        .querySelector("#lista-de-tarefas")
        .appendChild(card);
}

