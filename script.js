let filmes = JSON.parse(localStorage.getItem('filmes')) || [];

document.addEventListener('DOMContentLoaded', renderizarTabela);

function abrirModalFilme() {
    document.getElementById("modalFilme").style.display = "flex";
}

function fecharModalFilme() {
    document.getElementById("modalFilme").style.display = "none";
    limparCampos();
}

function salvarFilme() {
    let capa = document.getElementById("capa").value;
    let titulo = document.getElementById("titulo").value;
    let genero = document.getElementById("genero").value;
    let ano = document.getElementById("ano").value;
    let produtora = document.getElementById("produtora").value;

    if (capa && titulo && genero && ano && produtora) {
        filmes.push({ capa, titulo, genero, ano, produtora });
        localStorage.setItem('filmes', JSON.stringify(filmes));
        renderizarTabela();
        fecharModalFilme();
    } else {
        alert("Preencha todos os campos!");
    }
}

function renderizarTabela() {
    const dados = document.getElementById("dadosFilmes");
    dados.innerHTML = "";

    filmes.forEach((filme, index) => {
        dados.innerHTML += `
            <tr>
                <td><img src="${filme.capa}" alt="Capa" width="60"></td>
                <td>${filme.titulo}</td>
                <td>${filme.genero}</td>
                <td>${filme.ano}</td>
                <td>${filme.produtora}</td>
                <td><button onclick="removerFilme(${index})">Remover</button></td>
            </tr>
        `;
    });
}

function removerFilme(index) {
    filmes.splice(index, 1);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    renderizarTabela();
}

function limparCampos() {
    document.getElementById("capa").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("produtora").value = "";
}
