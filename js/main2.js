/* eslint-disable @typescript-eslint/no-unused-vars */
// 	PAG2 SLIDER SCARPI




const imgScarpaImg = document.querySelectorAll(".main_box1 img");
let imgScarpaImg_main2 = document.querySelector(".main_box2 img");



// info prodotto dentro carrello
const prezzo = document.getElementById("prezzo");
const prodotto = document.getElementById("prodotto");
const taglia = document.getElementById("taglia");

// info prodotto site
const nome_prodotto = document.getElementById("nome_prodotto");
const prezzoSite = document.getElementById("prezzoSite");





window.addEventListener('load', function() {
    
    initSliders();
    cambiaStyleTaglie();
    validaCampo();
   

    
})

// SLIDER DAS IMAGENS DO SAPATO

function initSliders() {
    
    
    
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

//-------------------------------------------------------------------------------

const taglieScarpi = document.querySelectorAll("#boxInfo2_taglie .taglie_button");
const alert_container = document.getElementById("alert_container");
const divInfoTaglia = document.querySelector("#tagliaSelected span");
const divInfoTaglia_1 = document.getElementById("tagliaSelected");
const divInfoTaglia_2 = document.querySelector('input[name="tagliaScelta"]');

function cambiaStyleTaglie() {
    
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
            divInfoTaglia_2.value = element.value ;
        });
        
    })
    
    
    
    
}

//------------------------------------------------------------------


const buttonAddCarello = document.querySelector(".buttonAddCarello");
const containerCarrello = document.querySelector(".container");
// itens capturados e sendo adicionados pelo localstorage: 

//const nome_prodotto =  document.getElementById("nome_prodotto").textContent;    

function validaCampo() {
    buttonAddCarello.addEventListener("click", event => {
        if (divInfoTaglia.textContent.trim() === "") {
            return; 
        }
        
        containerCarrello.style.display = "block";
        const nomeCapturado =  document.getElementById("prodotto"); 
        const tagliaCapturada =  document.getElementById("tagliaSceltaResponse");
        const prezzoCapturado =  document.getElementById("prezzo");
        const tagliaScelta =  document.querySelector('input[name="tagliaScelta"]').value;       
        const nome_prodotto =  document.getElementById("nome_prodotto").textContent;    
        const prezzoSite =  document.getElementById("prezzoSite").textContent;    
        const generoScelta =  document.getElementById("genero").textContent;    
        const quantidade =  document.getElementById("quantita-select").value;    
    
        // functions LocalStorage

        setDattiPopUpCarrello(tagliaCapturada, tagliaScelta);
        setDattiPopUpCarrello(prezzoCapturado, prezzoSite);
        setDattiPopUpCarrello(nomeCapturado, nome_prodotto);

        addDattiCarrello(nome_prodotto,tagliaScelta,generoScelta,quantidade, prezzoSite);
        


        // REDIRECIONAMENTO P PAGINA 4
         setTimeout(function() {
         window.location.href = "index4.html";
        }, 2000);
    });
}



// função da pagina 2, jogando os dados para o carrinho suspenso

function setDattiPopUpCarrello(chave, valor) {    

    chave.innerText = valor;

}

function addDattiCarrello(_nome, _tamanho, _genero ,_quantidade ,_prezzo ) {   
    let map = {};
    map.nome = _nome;
    map.tamanho = _tamanho;
    map.genero = _genero;
    map.quantidade = _quantidade;
    map.prezzo = _prezzo;

    localStorage.setItem("item", JSON.stringify(map));  
}




   
    
    

