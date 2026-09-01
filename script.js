const formulario = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
let indiceEditando = null;

function mostrarClientes() {
    listaClientes.innerHTML = "";

    clientes.forEach((cliente, indice) => {
        const card = document.createElement("div");

        card.classList.add("card-cliente");

        card.innerHTML = `
            <p><strong>Nome:</strong> ${cliente.nome}</p>
            <p><strong>E-mail:</strong> ${cliente.email}</p>
            <p><strong>Telefone:</strong> ${cliente.telefone}</p>

            <button onclick="editarCliente(${indice})">
                Editar
            </button>

            <button onclick="excluirCliente(${indice})">
                Excluir
            </button>
        `;

        listaClientes.appendChild(card);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const cliente = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    if (indiceEditando === null) {

        // Cadastrar novo cliente
        clientes.push(cliente);

    } else {

        // Atualizar cliente
        clientes[indiceEditando] = cliente;

        indiceEditando = null;

        document.querySelector("button[type='submit']").textContent = "Cadastrar";
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));

    formulario.reset();

    mostrarClientes();
});

function editarCliente(indice) {

    const cliente = clientes[indice];

    document.getElementById("nome").value = cliente.nome;
    document.getElementById("email").value = cliente.email;
    document.getElementById("telefone").value = cliente.telefone;

    indiceEditando = indice;

    document.querySelector("button[type='submit']").textContent = "Salvar alterações";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function excluirCliente(indice) {

    const confirmar = confirm("Tem certeza que deseja excluir este cliente?");

    if (confirmar) {

        clientes.splice(indice, 1);

        localStorage.setItem("clientes", JSON.stringify(clientes));

        mostrarClientes();
    }
}

mostrarClientes();
