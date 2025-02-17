/* eslint-disable @typescript-eslint/no-unused-vars */

window.addEventListener('load', function() {
	initSliders(scrollContainer_sec2, btn1_sec2, btn2_sec2);
	initSliders(scrollContainer_sec3, btn1_sec3, btn2_sec3);
	initSliders(scrollContainer_sec4, btn1_sec4, btn2_sec4);
	
	acessShoes(prodottiScarpi, containerScarpi)
	updateButtonColor(scrollContainer_sec2, btn2_sec2, btn1_sec2);
	updateButtonColor(scrollContainer_sec3, btn2_sec3, btn1_sec3);
	updateButtonColor(scrollContainer_sec4, btn2_sec4, btn1_sec4);
})

// SLIDER FUNCTION

// sec2 slider
const scrollContainer_sec2 = document.querySelector(".sec2Main")
const btn1_sec2 = document.querySelector(".button_sinistraSeta");
const btn2_sec2 = document.querySelector(".button_destraSeta");
// sec3 slider
const scrollContainer_sec3 = document.querySelector(".sec3Main")
const btn1_sec3 = document.querySelector(".button_sinistraSeta2");
const btn2_sec3 = document.querySelector(".button_destraSeta2");

// sec4 slider
const scrollContainer_sec4 = document.querySelector(".sec4Main")
const btn1_sec4 = document.querySelector(".button_sinistraSeta3");
const btn2_sec4 = document.querySelector(".button_destraSeta3");

// 	PAG2 SLIDER SCARPI

// const containerSliderPag2 = document.getElementById("container_Main")
// const btn1_pag2 = document.getElementById("btn1_pag2");
// const btn2_pag2 = document.getElementById("btn2_pag2");

function updateButtonColor(container, button1,button2) {
    let maxScroll = container.scrollWidth - container.clientWidth;
	button1.addEventListener

    container.addEventListener("scroll", () => {
		if (container.scrollLeft >= maxScroll) {
            button1.style.backgroundColor = "rgba(194, 194, 194, 0.8)"; 
			
		} else {
			button1.style.backgroundColor = "#626264";
			
        }

		


    });
    
}

function initSliders(x, a, b) {
	
	

	a.addEventListener("click", event =>{

		x.style.scrollBehavior = "smooth";
		x.scrollLeft -= 900;
	

	})


	b.addEventListener("click", event =>{

		x.style.scrollBehavior = "smooth";
		x.scrollLeft += 900;

	
	});

	
	

}

// Manipolazione dei link alla PAG2	

const prodottiScarpi = document.querySelectorAll('.boxScarpa a');
const containerScarpi = document.querySelectorAll('.boxScarpa');

function acessShoes(x, y) {

	y.forEach(element => {
		element.addEventListener("click", event =>{

			x.forEach(element => {
				element.setAttribute("href", "index2.html")
			});
	
		
		});
		
		
	});
	
	
}




