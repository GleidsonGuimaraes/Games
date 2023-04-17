const listWords = ["Torneira", "Comida", "Tomate", "Estanho", "Biscoito", "Chinchila", "Periquito", "Coruja", "Pescoço", "Boca", "Cadeira", "Recreio", "Jornal", "Revista", "Policia", "Sapateiro", "Bicicleta", "Foguete"];
const divWords = document.getElementById("palavra");

let divStr, array, corpo = 5, gameOver, contador;

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
    divWords.appendChild(divStr);
}

function caracteres(){
    let sort = parseInt(Math.random()*(listWords.length-1));
    array = listWords[sort].toUpperCase();
    for(let i=0; i<=array.length-1; i++){
        createDivStrings();
        divStr.setAttribute('id',`d${i}`);
    }
    contador = array.length;
    // console.log(sort, listWords[sort], contador);
}

function exibirPalavra(){
    for(let i=0; i<=array.length-1; i++){
        document.getElementById(`d${i}`).innerText = array[i];
        document.getElementById(`d${i}`).style.padding = "5px 0px 5px 0px";
    }
}

function removerPalavra(){
    for(let i=0; i<=array.length-1; i++){
        divWords.removeChild(document.getElementById(`d${i}`));
    }
}

function reiniciar(){
    if(gameOver){
        corpo = 5;
        for(let i=0; i<6; i++){
            document.getElementById(`c${i}`).style.display = `block`;
        }
        removerPalavra();
        caracteres();
        gameOver = false;
    }
}

function removerCorpo(){
    if(corpo === 0){
        document.getElementById(`c${corpo}`).style.display = `none`;
        exibirPalavra();
        gameOver = true;
    }else{
        document.getElementById(`c${corpo}`).style.display = `none`;
        corpo--;
        console.log(corpo);
    }
}

function verificandoCaracteres(char){
    let marcador = false;
    for(let i=0; i<=array.length-1; i++){
        if(char === array[i]){
            while(!document.getElementById(`d${i}`).innerText){
                document.getElementById(`d${i}`).innerText = char;
                document.getElementById(`d${i}`).style.padding = "5px 0px 5px 0px";
                contador--
            }
            marcador = true;
            // console.log(contador);
        }
    }
    if(contador === 0){
        marcador = true;
        gameOver = true;
    }else if(!marcador){
        removerCorpo();
    }
}

function iniciar(){
    caracteres();
}

window.addEventListener('load', iniciar);