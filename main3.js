/* eslint-disable @typescript-eslint/no-unused-vars */


window.addEventListener('load', function() {
	
    redirectForPayment()
  
    
})



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