// Controle de visibilidade do painel de produtos
var divPagamentos = document.getElementById("conteine-de-divs");
var produto = document.getElementById("produto-De-Pagamento");

produto.style.display = "none";

divPagamentos.addEventListener("click", function () {
    produto.style.display = (produto.style.display === "none") ? "flex" : "none";
});

// Carrossel de imagens
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElement
