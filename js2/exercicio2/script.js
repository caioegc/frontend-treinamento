function mudarNome(){
    let nome = "Caio"
    document.getElementById("ola").textContent = "Olá " +  nome;
}

function mostrarMensagem(){
    
   let mensagem = "Mensagem salva com sucesso";
   let inputText = document.getElementById("inputText");
   let adicionarTarefa = inputText.value;
    
   if(adicionarTarefa === ""){
    document.getElementById("mensagem").textContent = "Por favor, digite uma tarefa!";
} else{
     document.getElementById("mensagem").textContent = mensagem;


    let lista = document.getElementById("lista");
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = adicionarTarefa;

    lista.appendChild(novaTarefa)

    inputText.value = "";
}

}