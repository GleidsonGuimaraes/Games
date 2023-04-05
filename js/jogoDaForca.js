const listWords = ["Torneira", "Comida", "Tomate", "Estanho", "Biscoito", "Chinchila", "Periquito", "Coruja", "Pescoço", "Boca", "Cadeira", "Recreio", "Jornal", "Revista", "Policia", "Sapateiro", "Bicicleta", "Foguete"];
const divWords = document.getElementById("palavra");

let divStr, array, corpo = 5;

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
    divStr.style.padding = "5px 0px 5px 0px";
    divWords.appendChild(divStr);
}

function caracteres(){
    let sort = parseInt(Math.random()*(listWords.length-1));
    array = listWords[sort].toUpperCase();
    for(let i=0; i<=array.length-1; i++){
        createDivStrings();
        divStr.setAttribute('id',`d${i}`);
    }
    console.log(sort, listWords[sort]);
}

function removerCorpo(){
    if(corpo === 0){
        document.getElementById(`forca`).removeChild(document.getElementById(`c${corpo}`));
        corpo--;
        console.log(`Game Over. Tente novamente!`);
    }else if(corpo < 0){
        console.log(`Game Over. Tente novamente!`);
    }else{
        document.getElementById(`forca`).removeChild(document.getElementById(`c${corpo}`));
        corpo--;
        console.log(corpo);
    }
}

function verificandoCaracteres(char){
    let marcador = array.length-1;
    for(let i=0; i<=array.length-1; i++){
        if(char === array[i]){
            document.getElementById(`d${i}`).innerText = char;
            marcador--;
        }
    }
    if(marcador === array.length-1){
        removerCorpo();
    }
}

function iniciar(){
    caracteres();
}

window.addEventListener('load', iniciar);