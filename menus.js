const produtos = document.getElementById("opcaoProdutos");
const menuDesktop = document.getElementById("menu_desktop")

produtos.addEventListener("click", () => {
    menuDesktop.classList.toggle("menu_active")
})

const opcaoProdutosMobille = document.getElementById("opcaoProdutosMobille")
const menuMobille = document.getElementById("menu_mobille")

opcaoProdutosMobille.addEventListener("click", () => {
    menuMobille.classList.toggle("menu_active")
})

document.addEventListener("click", e => {
    // Fecha menu desktop se clicar fora do menu e botão
    if (!menuDesktop.contains(e.target) && !produtos.contains(e.target)) {
        menuDesktop.classList.remove("menu_active");
    }

    // Fecha menu mobile se clicar fora do menu e botão
    if (!menuMobille.contains(e.target) && !opcaoProdutosMobille.contains(e.target)) {
        menuMobille.classList.remove("menu_active");
    }
});

// Mostrar e esconder menus---------------------------------------------------------------