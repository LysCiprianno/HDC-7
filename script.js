// Array para armazenar os registros de pessoas
let pessoas = [];
 
// Função para cadastrar registros
function cadastrarRegistros() {
    for (let i = 0; i < 15; i++) {
        const nome = prompt(`Nome da pessoa ${i + 1}:`);
        if (!nome) return; // Cancela se não inserir nome
 
        const altura = parseFloat(prompt(`Altura da pessoa ${nome} (m):`));
        if (isNaN(altura)) return; // Cancela se altura não for válida
 
        // Armazena o registro da pessoa
        pessoas.push({ nome, altura });
    }
    alert('Cadastro concluído!');
}
 
// Função para apresentar registros de pessoas menores ou iguais a 1.5m
function apresentarMenores() {
    mostrarResultados(pessoas.filter(p => p.altura <= 1.5), 'Menores ou iguais a 1.5m');
}
 
// Função para apresentar registros de pessoas maiores que 1.5m
function apresentarMaiores() {
    mostrarResultados(pessoas.filter(p => p.altura > 1.5), 'Maiores que 1.5m');
}
 
// Função para apresentar registros de pessoas entre 1.5m e 2.0m
function apresentarEntre() {
    mostrarResultados(pessoas.filter(p => p.altura > 1.5 && p.altura < 2.0), 'Entre 1.5m e 2.0m');
}
 
// Função para mostrar os resultados filtrados na tabela
function mostrarResultados(resultados, titulo) {
    const tabelaBody = document.getElementById('tabela-body');
    tabelaBody.innerHTML = ''; // Limpa a tabela antes de mostrar novos resultados
 
    if (resultados.length === 0) {
        alert(`Nenhuma pessoa encontrada para ${titulo}.`);
        return;
    }
 
    resultados.forEach(p => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${p.nome}</td><td>${p.altura.toFixed(2)}</td>`;
        tabelaBody.appendChild(row);
    });
 
    alert(`${titulo} exibidos na tabela.`);
}
 
// Função para calcular a média das alturas
function calcularMedia() {
    const media = pessoas.length ? (pessoas.reduce((soma, p) => soma + p.altura, 0) / pessoas.length) : 0;
    alert(`Média das alturas: ${media.toFixed(2)}m`);
}
 
// Função para sair do programa
function sair() {
    if (confirm('Deseja realmente sair?')) {
        alert('Saindo do programa.');
    }
}
