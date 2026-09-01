const formulario = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
let clienteEditando = null;

function mostrarClientes() {
    listaClientes.innerHTML = "";

    clientes.forEach((cliente, index) => {
        const card = document.createElement("div");
        card.classList.add("card-cliente");

        card.innerHTML = `
            <p><strong>${cliente.nome}</strong></p>
            <p>E-mail: ${cliente.email}</p>
            <p>Telefone: ${cliente.telefone}</p>

            <button type="button" class="btn-editar">Editar</button>
            <button type="button" class="btn-excluir">Excluir</button>

            <hr>
        `;

        // Editar
        card.querySelector(".btn-editar").addEventListener("click", function() {
            document.getElementById("nome").value = cliente.nome;
            document.getElementById("email").value = cliente.email;
            document.getElementById("telefone").value = cliente.telefone;

            clienteEditando = index;

            formulario.querySelector("button").textContent = "Salvar alteração";
        });

        // Excluir
        card.querySelector(".btn-excluir").addEventListener("click", function() {
            clientes.splice(index, 1);

            localStorage.setItem("clientes", JSON.stringify(clientes));

            mostrarClientes();
        });

        listaClientes.appendChild(card);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const novoCliente = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    // Editando
    if (clienteEditando !== null) {
        clientes[clienteEditando] = novoCliente;

        clienteEditando = null;

        formulario.querySelector("button").textContent = "Cadastrar";
    } 
    
    // Novo cadastro
    else {
        clientes.push(novoCliente);
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));

    formulario.reset();

    mostrarClientes();
});

mostrarClientes();
