const formulario = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
let indiceEditando = null;

function mostrarClientes(filtro = "") {

    listaClientes.innerHTML = "";

    clientes.forEach((cliente, index) => {

        if (
            !cliente.nome.toLowerCase().includes(filtro.toLowerCase()) &&
            !cliente.email.toLowerCase().includes(filtro.toLowerCase())
        ) {
            return;
        }

        const div = document.createElement("div");

        div.innerHTML = `
            <p>
                <strong>${cliente.nome}</strong><br>
                E-mail: ${cliente.email}<br>
                Telefone: ${cliente.telefone}
            </p>

            <button onclick="editarCliente(${index})">
                Editar
            </button>

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

    if (indiceEditando === null) {

        clientes.push({
            nome: nome,
            email: email,
            telefone: telefone
        });

        alert("Cliente cadastrado com sucesso!");

    } else {

        clientes[indiceEditando] = {
            nome: nome,
            email: email,
            telefone: telefone
        };

        indiceEditando = null;

        alert("Cliente atualizado com sucesso!");
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));

    formulario.reset();

    mostrarClientes();
});

function editarCliente(index) {

    const cliente = clientes[index];

    document.getElementById("nome").value = cliente.nome;
    document.getElementById("email").value = cliente.email;
    document.getElementById("telefone").value = cliente.telefone;

    indiceEditando = index;
}

function excluirCliente(index) {

    clientes.splice(index, 1);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    mostrarClientes();

    alert("Cliente excluído!");
}

mostrarClientes();
