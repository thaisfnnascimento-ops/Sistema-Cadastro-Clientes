const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome === "" || email === "" || telefone === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Cliente cadastrado com sucesso!");

    formulario.reset();
});
