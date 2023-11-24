var listaDeAmigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    listaDeAmigos.push(amigo);

    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";
    lista.innerHTML += listaDeAmigos;
}