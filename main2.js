/* eslint-disable @typescript-eslint/no-unused-vars */
// 	PAG2 SLIDER SCARPI


const imgScarpaImg = document.querySelectorAll(".main_box1 img");
let imgScarpaImg_main2 = document.querySelector(".main_box2 img");




window.addEventListener('load', function() {
	initSliders()
    cambiaStyleTaglie()

    validaCampo()
    inserireDattiProdotto()
  
    
})


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

const taglieScarpi = document.querySelectorAll("#boxInfo2_taglie .taglie_button");
const divInfoTaglia = document.querySelector("#tagliaSelected span");
const divInfoTaglia_1 = document.getElementById("tagliaSelected");
const alert_container = document.getElementById("alert_container");


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
           
            
        });

    })
    

}

const buttonAddCarello = document.querySelector(".buttonAddCarello");
const containerCarrello = document.querySelector(".container");
// info prodotto dentro carrello
const prezzo = document.getElementById("prezzo");
const prodotto = document.getElementById("prodotto");
const taglia = document.getElementById("taglia");

// info prodotto site
const nome_prodotto = document.getElementById("nome_prodotto");
const prezzoSite = document.getElementById("prezzoSite");




function validaCampo() {
    taglieScarpi.forEach(element => {
      
        buttonAddCarello.style.cursor = "pointer";
        buttonAddCarello.addEventListener("click", event => {
           
            containerCarrello.style.display = "block";
            if (divInfoTaglia.textContent == "") {
                alert_container.style.display = "block";
                
            }
             
            setTimeout(function() {
                window.location.href = "index4.html";

            }, 5000);

        })   
    }) 
}



function inserireDattiProdotto() {
   
    buttonAddCarello.addEventListener("click", event => {
        taglia.textContent =  `${divInfoTaglia.textContent}`;
        prezzo.textContent =  `${prezzoSite.textContent}`;
        prodotto.textContent =  `${nome_prodotto.textContent}`;

    })   

}




