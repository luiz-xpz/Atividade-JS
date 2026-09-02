// ==================================
//         Atividade 1
// ==================================

function verificarIdade() {
 
    const idade = Number(document.getElementById("idade").value);
 
    if (idade >= 18) {
        document.getElementById("ResultadoIdade").textContent = "Maior de Idade";
    } else {
        document.getElementById("ResultadoIdade").textContent = "Menor de Idade";
    }
 
}
 
// ==================================
//         Atividade 2
// ==================================
 
function verificarNumero() {
 
    const numero = Number(document.getElementById("numero").value);
 
    if (numero > 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é positivo.";
    } else if (numero < 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é negativo.";
    } else {
        document.getElementById("ResultadoNumero").textContent = "O número é igual a zero.";
    }
 
}
 
// ==================================
//         Atividade 3
// ==================================
 
function verificarNota() {
 
    const nota = Number(document.getElementById("nota").value);
 
    if (nota >= 7) {
        document.getElementById("ResultadoNota").textContent = "Aprovado";
    } else if (nota >= 5) {
        document.getElementById("ResultadoNota").textContent = "Recuperação";
    } else {
        document.getElementById("ResultadoNota").textContent = "Reprovado";
    }
 
}

// ==================================
//         Atividade 4
// ==================================

function verificarPrioridade() {
    const prioridade = document.getElementById("prioridade").value;
    const resultado = document.getElementById("resultado");
    
    switch (prioridade) {
        case "urgente":
            resultado.textContent = "Atenção Reforçada!";
            break;
        case "alta":
            resultado.textContent = "Atenção Alta!";
            break;
        case "media":
            resultado.textContent = "Atenção Média!";
            break;
        case "baixa":
            resultado.textContent = "Atenção Baixa!";
            break;
        default:
            resultado.textContent = "Prioridade Desconhecida.";
    }
}


// ==================================
//         Atividade 5
// ==================================


function verificarTarefa(){
    const prioridade = document.getElementById("prioridadeT").value;
    const resultado = document.getElementById("resultados");
    const atrasada = document.getElementById("atrasadaT").checked;
 
resultado.classList.remove("alerta", "calmo");
 
    if(prioridade === "selecionarT"){
        resultado.textContent = "A Prioridade é desconhecida";
        resultado.classList.add("mostrar", "desconhecida")
    }
    else if(prioridade === "urgenteT" || (prioridade === "altaT" && atrasada)){
        resultado.textContent = "Precisa de atenção agora!";
        resultado.classList.add("mostrar", "alerta");
    }
    else{
        resultado.textContent = "Pode aguardar";
        resultado.classList.add("mostrar", "calmo");
    }
}

//=================================
// atividade 6
// ================================

function verificarLogin() {
 
    const usuario = document.getElementById("usuario").value;

    const senha = document.getElementById("senha").value;
 
    if (usuario === "admin" && senha === "1234") {

        document.getElementById("ResultadoLogin").textContent = "Login realizado com sucesso!";

    } else if (usuario === "admin" && senha !== "1234") {

        document.getElementById("ResultadoLogin").textContent = "Senha incorreta.";

    } else {

        document.getElementById("ResultadoLogin").textContent = "Usuário não encontrado.";

    }
 
}
 
//=================================
// atividade 7
// ================================

function verificarIdadeTernario() {
 
    const idade = Number(document.getElementById("idadeTernario").value);
 
    const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
 
    document.getElementById("ResultadoTernario").textContent = situacao;
    
}
