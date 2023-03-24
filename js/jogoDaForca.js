const listWords = ["Torneira", "Comida", "Tomate", "Estanho", "Biscoito", "Chinchila", "Periquito", "Coruja", "Pescoço", "Boca", "Cadeira", "Recreio", "Jornal", "Revista", "Polícia", "Sapateiro", "Bicicleta", "Foguete"];
const divWords = document.getElementById("palavra");

let divStr;

function createDivStrings(){
    divStr = document.createElement("div");
    divStr.classList.add('border-bottom');
    divStr.classList.add("border-secondary");
    divStr.classList.add("bg-secondary");
    divStr.classList.add("bg-opacity-25");
    divStr.classList.add("border-2");
    divStr.classList.add("rounded-top");
    divStr.classList.add("m-1");
    divStr.classList.add("w-5");
    divStr.classList.add("d-flex");
    divStr.classList.add("justify-content-center");
    divStr.classList.add("text-uppercase");
    divStr.style.padding = "5px 0px 5px 0px";
    divWords.appendChild(divStr);
}

function caracteres(){
    let sort = parseInt(Math.random()*(listWords.length-1));
    let array = listWords[sort];
    for(let i=0; i<=array.length-1; i++){
        createDivStrings();
        divStr.innerText = array[i];
    }
    console.log(sort, listWords[sort]);
}

caracteres();
// createDivStrings();
// console.log(divWords.innerHTML);