/* eslint-disable @typescript-eslint/no-unused-vars */
import { redirectPag } from "/js/utils.js";
// REDIRECIONAMENTO DA PAGINA 4 PARA A 5

window.addEventListener('load', function() {

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

buttonGoPayment.addEventListener('click', event =>{
    redirectPag("index5.html");
})




function addDattiCarrello(_nome, _tamanho, _genero ,_quantidade ,_prezzo ) {   
    let map = {};
    map.nome = _nome;
    map.tamanho = _tamanho;
    map.genero = _genero;
    map.quantidade = _quantidade;
    map.prezzo = _prezzo;

    localStorage.setItem("item", JSON.stringify(map));  
}

