var listaDeAmigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    listaDeAmigos.push(amigo);

    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = listaDeAmigos;
}

function sortear() {
    listaDeAmigos.sort();
    let amigosEmbaralhados = document.getElementById("lista-sorteio");
    let i = 0;
    while (i < listaDeAmigos.length) {
        for (let j = 0; j < listaDeAmigos.length; j++) {
            if (listaDeAmigos[i] != listaDeAmigos[j] && i < listaDeAmigos.length) {
                console.log(i + " " + listaDeAmigos[i] + " != " + listaDeAmigos[j] + " " + j);
                amigosEmbaralhados.innerHTML += listaDeAmigos[i] + " -> " + listaDeAmigos[j] + "<br>";
                i++;
            }
        }
    }
}

function reiniciar() {
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
}