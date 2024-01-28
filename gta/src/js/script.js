//  PASSO 01  
const botao =  document.querySelector(".btn-plataforma");
const elementosPlataforma = document.querySelector(".btn-plataforma .plataforma");
// PASSO 03
botao.addEventListener("click", () => {
    elementosPlataforma.classList.toggle("ativo");

});