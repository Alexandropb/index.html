document.addEventListener("DOMContentLoaded", function() {
    // Capturando os elementos
    const titulo = document.getElementById("titulo");
    const listaNaoOrdenada = document.querySelector("ul");
    const link = document.querySelector("a");
    const listaOrdenada = document.getElementById("lista-ordenada");

    // Adicionando conteúdo textual
    titulo.innerText = "Bem-vindo ao Gintrão!";
    link.innerText = "Visite nosso parceiro";

    // Adicionando itens à lista não ordenada
    listaNaoOrdenada.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    `;

    // Adicionando itens à lista ordenada
    listaOrdenada.innerHTML = `
        <li><a href="https://example.com/1" target="_blank">Link 1</a></li>
        <li><a href="https://example.com/2" target="_blank">Link 2</a></li>
        <li><a href="https://example.com/3" target="_blank">Link 3</a></li>
    `;
});
