
var div_pagamentos = document.getElementById("conteine-de-divs");
var produto = document.getElementById("produto-De-Pagamento");

produto.style.display = "none";

div_pagamentos.addEventListener("click", function(){

    if (produto.style.display == "none") {
        produto.style.display = "flex";
    }
    else{
        produto.style.display = "none";
    }
    

});


//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel
//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel
//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel//carrossel




var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");



const images1 = [
    "./src/Imagem/mercadoria/uva.jfif",
    "./src/Imagem/mercadoria/tomate.jfif",
    "./src/Imagem/mercadoria/repolho.jfif",
    "./src/Imagem/mercadoria/laranja.jfif",
    "./src/Imagem/mercadoria/cenoura.jfif",
    "./src/Imagem/mercadoria/cebola.jfif",
    "./src/Imagem/mercadoria/batata.jfif",
    "./src/Imagem/mercadoria/melancia.jpg",
    "./src/Imagem/mercadoria/beterraba.jpg",
    "./src/Imagem/mercadoria/morangos-maior.jpg"
    // Adicione mais as imagens aqui
];

var x = 1;
var vez = 0

function upImg() {


    x = maisX(x)

    img1.src = images1[x];

    x = maisX(x)

    img2.src = images1[x];

    x = maisX(x)

    img3.src = images1[x];

    vez++;

}

function maisX(x) {
    if (x >= 9) {
        x = 1;
    }
    else{
        x = x + 1;
    };
    return x
}
    
setInterval(function lupps(){
    upImg()
}, 4000);

















