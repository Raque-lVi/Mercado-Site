
var todas = []

async function pesquisa() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };


    try {
        const response = await fetch('http://localhost:3000/api/fotos/', options);
        const data = await response.json();
        
        data.forEach(element => {
            todas.push(element.link);
        });

        console.log("Fotos carregadas:", todas); 

        upImg();

    } catch (error) {
        console.error("Erro ao buscar as fotos:", error);
    }
}










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


// [
//     // "./src/Imagem/mercadoria/uva.jfif",
//     // "./src/Imagem/mercadoria/tomate.jfif",
//     // "./src/Imagem/mercadoria/repolho.jfif",
//     // "./src/Imagem/mercadoria/laranja.jfif",
//     // "./src/Imagem/mercadoria/cenoura.jfif",
//     // "./src/Imagem/mercadoria/cebola.jfif",
//     // "./src/Imagem/mercadoria/batata.jfif",
//     // "./src/Imagem/mercadoria/melancia.jpg",
//     // "./src/Imagem/mercadoria/beterraba.jpg",
//     // "./src/Imagem/mercadoria/morangos-maior.jpg"
//     // // Adicione mais as imagens aqui
// ];

async function carregarCarrossel() {
    // Certifique-se de esperar a pesquisa carregar as imagens
    await pesquisa();

    // Quando as imagens estiverem carregadas, inicia o carrossel
    const images1 = todas;


var x = 1;
var vez = 0;

function upImg() {


    x = maisX(x)

    img1.src = images1[x];
    console.log(images1[x])
    

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

}

carregarCarrossel();












