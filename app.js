//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {

    let campoAmigo = document.getElementById('amigo');
    let nomeAmigo = campoAmigo.value;

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // vai adicionar o nome na lista de amigos
    listaDeAmigos.push(nomeAmigo);
    atualizarListaDeAmigos();
    campoAmigo.value = "";
}

function atualizarListaDeAmigos() {
    let listaNoHtml = document.getElementById('listaAmigos');
    listaNoHtml.innerHTML = ""; 
    //Decidi usar o forEach pra facilitar o retorno da lista //
    listaDeAmigos.forEach((amigo, index) => {
    let item = document.createElement('li');
    item.textContent = amigo;
    item.className = "nome-item";   
    listaNoHtml.appendChild(item);
   });
}

function sortearAmigo() {
    // Vai verificar se tem algum nome dentro da lista
    if (listaDeAmigos.length === 0) {
        alert("Nenhum nome disponível para sortear.");
        return;
    }
        
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // vai retirar da lista o nome que já foi sorteado
    listaDeAmigos.splice(indiceAleatorio, 1);

    // vai mostrar na tela o nome que foi sorteado    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

    atualizarListaDeAmigos();
}
