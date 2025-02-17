/* eslint-disable @typescript-eslint/no-unused-vars */

// REDIRECIONAMENTO DA PAGINA 4 PARA A 5

// import { addDattiCarrello } from "/js/main2.js";


window.addEventListener('load', function() {
    redirectForPayment();
    //nome, tamanho, genero ,quantidade ,prezzo
    let map = JSON.parse(localStorage.getItem("item"));
    this.document.getElementById("nome_prodotto").textContent = map.nome;
    this.document.getElementById("size-select").value = map.tamanho;
    this.document.getElementById("generoProdotto").textContent = map.genero;
    this.document.getElementById("quantita-select").value = map.quantidade;
    this.document.getElementById("prezzoProdotto").textContent = map.prezzo;
    
   console.log(map);
   
    
    
})


// essa função está ligada a pagina 4 -> redireciona para a 5

const buttonGoPayment = document.getElementById("neroButton");

function redirectForPayment() {
   
    buttonGoPayment.addEventListener("click", event => {
        setTimeout(function() {
            window.location.href = "index5.html";

        }, 1000);
    })   
    buttonGoPayment.addEventListener("mouseover", event => {
        buttonGoPayment.style.cursor ="pointer";

    }) 

}




