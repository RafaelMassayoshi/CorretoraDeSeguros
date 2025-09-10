

const imagem = document.querySelectorAll(".imagem_propaganda");
const marcadores = document.querySelector(".marcadores")
let bolas = [];
let posicao = 0;

function mostrarImagem(posicao){
    imagem.forEach(imagemAtual => imagemAtual.classList.remove("active"))
    bolas.forEach(bolinhaAtual => bolinhaAtual.classList.remove("ativa"))

    imagem[posicao].classList.add("active")
    bolas[posicao].classList.add("ativa")
}

imagem.forEach((_, indice) =>{
    const bola = document.createElement("span")
    bola.classList.add("bola")

    if(indice === 0)bola.classList.add("ativa")

    bola.addEventListener("click", () =>{
        posicao = indice
        mostrarImagem(posicao)
    })

    marcadores.appendChild(bola)
    bolas.push(bola);

})

setInterval(() =>{
    posicao = (posicao + 1) % imagem.length
    mostrarImagem(posicao)
}, 3000);

//---------------------------------------------------------


const whatsapp = document.querySelector(".whatsapp");

whatsapp.addEventListener("click", ()=>{
    window.open("https://wa.me/5511932671602","blank")
})

const instagram = document.querySelector(".instagram");
instagram.addEventListener("click", () =>{
    window.open("https://www.instagram.com/edaseguros", "blank")
})

const facebook = document.querySelector(".facebook");

facebook.addEventListener("click", () =>{
    window.open("https://www.facebook.com/edaseguros", "blank")
})
