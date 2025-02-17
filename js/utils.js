/* eslint-disable @typescript-eslint/no-unused-vars */

// fazendo a manipulação dos dados json
export function manipularJson() {
    fetch("/data/nike.json")
    .then(response => response.json()) //CONVERTENDO PRA OBJ
    .then(data => {
        localStorage.setItem("dados", JSON.stringify(data)); // SALVA NO localStorage
        console.log("JSON salvo no localStorage:", data);
    })
    .catch(error => console.error("Erro ao carregar JSON:", error));
    const jsonSalvo = localStorage.getItem("dados");
    if (jsonSalvo) {
        const objeto = JSON.parse(jsonSalvo);
        return objeto;
       
    } 


}


// adicionando dados onde precisa ser setado 

export function setDatti(chave, valor) {    

    chave.innerText = valor;

}

// adiconando dados ao carrinho

export function addDattiCarrello(_nome, _tamanho, _genero ,_quantidade ,_prezzo ) {   
    let map = {};
    map.nome = _nome;
    map.tamanho = _tamanho;
    map.genero = _genero;
    map.quantidade = _quantidade;
    map.prezzo = _prezzo;

    localStorage.setItem("item", JSON.stringify(map));  
}


export function redirectPag(pag) {
        setTimeout(function() {
            window.location.href = pag;
    
        }, 1000);  
}

export function mouseoverOn(button){
    button.addEventListener("mouseover", event => {
        button.style.cursor ="pointer";
    
    }) 

}

export function mostrarQuantidadeSapato(tagBoxTaglie) {
     let objeto = manipularJson();
        const array_taglie = objeto.prodotti[0].qualita_stock;
        console.log(array_taglie);

        const boxTaglie = document.querySelector(tagBoxTaglie);
        boxTaglie.innerHTML = '';
        array_taglie.forEach(num => {
            console.log(num);
            boxTaglie.innerHTML += `<option value="${num}"></option>`;
        });
}