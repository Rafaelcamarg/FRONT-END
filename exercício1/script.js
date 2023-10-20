const html = document.querySelector("html")
const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
    html.classList.toggle("trocartema");
});
