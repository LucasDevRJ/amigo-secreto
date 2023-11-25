var listaDeAmigos = [];
var amigosForamSorteados = false;

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;

    if (amigosForamSorteados == false) {
        if (amigo.length == 0) {
            alert("Digite o nome do amigo!!");
        } else {
            listaDeAmigos.push(amigo);
    
            let lista = document.getElementById("lista-amigos");
            lista.innerHTML = listaDeAmigos;
            document.getElementById("nome-amigo").value = "";
        }
    } else {
        alert("Amigos já foram sorteados, reinicie o jogo para sortear novamente!!");
    }
}

function sortear() {
    if (listaDeAmigos.length != 0) {
        if (amigosForamSorteados == false) {
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
            amigosForamSorteados = true;
        } else {
            alert("Amigos já foram sorteados, reinicie o jogo para sortear novamente!!");
        }
    } else {
        alert("Adicione amigos para poder sortear!!");
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
    amigosForamSorteados = false;
}