function mudarNome(){
    let nome = "Caio";
    document.getElementById("ola").textContent = "Olá " +  nome;
}

let itens = [];

function mostrarMensagem(){
    
   let mensagemSucesso = "Mensagem salva com sucesso";
   let inputText = document.getElementById("inputText");
   let adicionarTarefa = inputText.value.trim();
   let mensagem = document.getElementById("mensagem");

    
   if(adicionarTarefa === ""){
    let mensagemErro = "Por favor, digite algo!"
    mensagem.style.color = "#ff0000";
    mensagem.textContent = mensagemErro
} else{
     mensagem.style.color = "#008000";
     mensagem.textContent = mensagemSucesso;
     itens.push(adicionarTarefa);  
     renderizarTarefas();
}

    inputText.value = "";

}

function renderizarTarefas(){

    let renderizarTarefas = document.getElementById("lista");

    renderizarTarefas.innerHTML = "";


    for(let i = 0; i < itens.length; i++){
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = itens[i];

    let remover = document.createElement("button");
    remover.textContent = "Remover"
    remover.className = "removerBotao";

    let editar = document.createElement("button");
    editar.textContent = "Editar";
    editar.className= "editarBotao";

    remover.onclick = () => {removerTarefa(i)}
    editar.onclick = () =>{editarTarefa(i)}

    novaTarefa.appendChild(remover);
    novaTarefa.appendChild(editar);
    renderizarTarefas.appendChild(novaTarefa);

}

}

function editarTarefa(i){
    let tarefaEditar = prompt("Coloque a nova tarefa!");
    if(tarefaEditar.trim() != ""){
        itens[i] = tarefaEditar;
        renderizarTarefas();
    }
}


function removerTarefa(i){
    itens.splice(i, 1);
    renderizarTarefas();
}