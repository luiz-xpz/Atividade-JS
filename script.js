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