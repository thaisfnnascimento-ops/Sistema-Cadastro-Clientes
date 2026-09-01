const formulario = document.getElementById("formCliente");
const listaClientes = document.getElementById("listaClientes");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const cliente = document.createElement("div");

    cliente.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <hr>
    `;

    listaClientes.appendChild(cliente);

    formulario.reset();
});
