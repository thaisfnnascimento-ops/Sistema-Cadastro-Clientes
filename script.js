const formulario = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

let clienteEditando = null;

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Se estiver editando um cliente
    if (clienteEditando) {
        clienteEditando.querySelector(".nome").textContent = nome;
        clienteEditando.querySelector(".email").textContent = email;
        clienteEditando.querySelector(".telefone").textContent = telefone;

        clienteEditando = null;
        formulario.querySelector("button").textContent = "Cadastrar";

        formulario.reset();
        return;
    }

    // Criar novo cliente
    const cliente = document.createElement("div");
    cliente.classList.add("card-cliente");

    cliente.innerHTML = `
        <p><strong>Nome:</strong> <span class="nome">${nome}</span></p>
        <p><strong>E-mail:</strong> <span class="email">${email}</span></p>
        <p><strong>Telefone:</strong> <span class="telefone">${telefone}</span></p>

        <button type="button" class="btn-editar">Editar</button>
        <button type="button" class="btn-excluir">Excluir</button>

        <hr>
    `;

    listaClientes.appendChild(cliente);

    formulario.reset();

    // Botão Editar
    cliente.querySelector(".btn-editar").addEventListener("click", function() {
        document.getElementById("nome").value =
            cliente.querySelector(".nome").textContent;

        document.getElementById("email").value =
            cliente.querySelector(".email").textContent;

        document.getElementById("telefone").value =
            cliente.querySelector(".telefone").textContent;

        clienteEditando = cliente;

        formulario.querySelector("button").textContent = "Salvar alteração";
    });

    // Botão Excluir
    cliente.querySelector(".btn-excluir").addEventListener("click", function() {
        cliente.remove();
    });
});
