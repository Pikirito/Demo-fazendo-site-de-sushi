const btnAddOnCart = document.querySelectorAll("button");
const listaCarrinho = document.querySelector("#lista-carrinho");

for (let i = 0; i < btnAddOnCart.length; i++) {
  const botoes = btnAddOnCart[i];

  botoes.addEventListener("click", function (event) {
    console.log(event);
    const divPai = event.target.parentElement;
    /* const listElements = event.composedPath()(1); */

    const nomeProduto = divPai.querySelector("p").innerText;

    const li = document.createElement("li");
    li.innerText = nomeProduto;

    listaCarrinho.append(li);
  });
}
