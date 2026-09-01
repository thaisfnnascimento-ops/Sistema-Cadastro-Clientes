const formulario = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function mostrarClientes() {

    listaClientes.innerHTML = "";

    clientes.forEach((cliente, index) => {

        const div = document.createElement("div");

        div.innerHTML = `
            <p>
                <strong>${cliente.nome}</strong><br>
                E-mail: ${cliente.email}<br>
                Telefone: ${cliente.telefone}
            </p>

            <button onclick="excluirCliente(${index})">
                Excluir
            </button>

            <hr>
        `;

        listaClientes.appendChild(div);
    });
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    clientes.push({
        nome: nome,
        email: email,
        telefone: telefone
    });

    localStorage.setItem("clientes", JSON.stringify(clientes));

    formulario.reset();

    mostrarClientes();

    alert("Cliente cadastrado com sucesso!");
});

function excluirCliente(index) {

    clientes.splice(index, 1);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    mostrarClientes();
}

mostrarClientes();
