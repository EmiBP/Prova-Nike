/* eslint-disable @typescript-eslint/no-unused-vars */
// 	PAG2 SLIDER SCARPI

import { manipularJson } from "/js/utils.js";
import { setDatti } from "/js/utils.js";
import { addDattiCarrello } from "/js/utils.js";
import { redirectPag } from "/js/utils.js";
import { mouseoverOn } from "/js/utils.js";
import { mostrarQuantidadeSapato } from "/js/utils.js";


const buttonAddCarello = document.querySelector(".buttonAddCarello");
const tagBoxTaglie = document.getElementById("quantita-select");

document.addEventListener("DOMContentLoaded", function () {
    mouseoverOn(buttonAddCarello);
    initSliderPag2();
    addSizesJson();
    mostrarQuantidadeSapato(tagBoxTaglie);
    
});

// Init SLIDER IMAGENS Scarpa
const imgScarpaImg = document.querySelectorAll(".main_box1 img");
let imgScarpaImg_main2 = document.querySelector(".main_box2 img");

function initSliderPag2() {
    imgScarpaImg.forEach(element => {
        element.addEventListener("mouseover", event =>{
            let src = element.getAttribute('src');
            
            imgScarpaImg_main2.setAttribute("src", src);
            
         element.style.opacity = "0.5";
         
        })
        
    });
    
    imgScarpaImg.forEach(element => {
        element.addEventListener("mouseout", event =>{
            element.style.opacity = "1";
            
            
        })
        
    });   
}


// nessa função to adicionando dinamicamente os tamosanhos de sapato
function addSizesJson() {
    let objeto = manipularJson();
    let array_taglie;
    
    array_taglie = objeto.prodotti[0].taglie_disponibili;
    console.log(array_taglie);
    
    const boxInfo2_taglie = document.querySelector("div#boxInfo2_taglie");
    
    boxInfo2_taglie.innerHTML = '';
    array_taglie.forEach(num => {
        console.log(num);
        boxInfo2_taglie.innerHTML += `<button class="taglie_button" value="${num}"><span>${num}</span></button>`;
    });
    
    manipulandoButtonsTaglie();
}

//--------------------------------------------------------------------------------
// funcao que altera o style dos botões de tamanho e adiciona o valor escolhido no display abaixo, além de validar ele

function manipulandoButtonsTaglie() {
    
    const taglieScarpi = document.querySelectorAll("#boxInfo2_taglie .taglie_button");
    const divInfoTaglia = document.querySelector("#tagliaSelected span");
    const divInfoTaglia_1 = document.getElementById("tagliaSelected");
    const alert_container = document.getElementById("alert_container");
    
    taglieScarpi.forEach(element => {
        let txtContentTaglie = element.textContent;
        element.addEventListener("mouseover", event => {
         element.style.borderColor = "black";
         element.style.cursor = "pointer";
           
        })
        element.addEventListener("mouseout", event => {
        
            element.style.borderColor = "rgb(180, 175, 175";
        })
        element.addEventListener("click", event => {
            alert_container.style.display = "none";
            divInfoTaglia_1.style.display = 'block';
            divInfoTaglia.innerHTML = `${txtContentTaglie}`;
        });
    })
}


//ENVIA DADOS AO CARRINHO

buttonAddCarello.addEventListener("click", event => {
    const tagliaSelected = document.getElementById("tagliaSelected").textContent;
    const alert_container = document.getElementById("alert_container");
    const containerCarrello = document.querySelector(".container");
    const nomeCapturado =  document.getElementById("prodotto"); 
    const tagliaCapturada =  document.getElementById("tagliaSceltaResponse");
    const prezzoCapturado =  document.getElementById("prezzo");
    const tagliaScelta =  document.getElementById("tagliaScelta").textContent;       
    const nome_prodotto =  document.getElementById("nome_prodotto").textContent;    
    const prezzoSite =  document.getElementById("prezzoSite").textContent;    
    const generoScelta =  document.getElementById("genero").textContent;    
    const quantidade =  document.getElementById("quantita-select").value;    
    addDattiCarrello(nome_prodotto,tagliaScelta,generoScelta,quantidade, prezzoSite);
    setDatti(tagliaCapturada, tagliaScelta);
    setDatti(prezzoCapturado, prezzoSite);
    setDatti(nomeCapturado, nome_prodotto);

    // 2 - CAPTURANDO DADOS DA PAGINA DO PRODUTO
    
    if (tagliaSelected.textContent === "") {
        alert_container.style.display = "block";
        
    } else{
      
        containerCarrello.style.display = "block";
        redirectPag("index4.html");
    }
    
    // SETANDO OS DADOS NO CARRINHO SUSPENSO

});



   
    
    

