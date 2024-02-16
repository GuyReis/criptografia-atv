
let palavrasCripto = {
    "a": "ai",
    "e" : "enter",
    "i" : "imes", 
    "o" : "ober",
    "u" : "ufat"
};
let palavrasDescripto ={
    "ai" : "a",
    "enter" : "e",
    "imes" : "i", 
    "ober" : "o",
    "ufat" : "u"
};

function checarInput(){
    let inputValor = document.getElementById('inputTexto').value;
    let botaoCripto = document.getElementById('botaoCripto');

    if (inputValor.trim() !== ''){
        botaoCripto.disabled = false;
        botaoDescri.disabled = false;
        botaoCripto.classList.remove('disabled');
        botaoDescri.classList.remove('disabled');

    } 
    else{
        botaoCripto.disabled = true;
        botaoDescri.disabled = true;
        botaoCripto.classList.add('disabled');
        botaoDescri.classList.add('disabled');

    }

}

function criptografarTexto(texto){
        
        let input = new RegExp(Object.keys(palavrasCripto).join("|"), "gi");       
        function criptografar(match) {
            return palavrasCripto[match.toLowerCase()];
        }       
        let textoCriptografado = texto.replace(input, criptografar);
        return textoCriptografado;
}

function criptografarInput(){
     let resultado = document.getElementById('textoResultado');
     let inputTexto = document.getElementById('inputTexto');
     let textoOriginal = inputTexto.value.toLowerCase();
     let textoCripto = criptografarTexto(textoOriginal);
    resultado.innerHTML = textoCripto;
}

   function descriptografarTexto(texto){
    let input = new RegExp(Object.keys(palavrasDescripto).join("|"), "gi");
        function descriptografar(match) {
            return palavrasDescripto[match.toLowerCase()];
        }       
        let textoDescriptografado = texto.replace(input, descriptografar);
        return textoDescriptografado;
}

function descriptografarInput(){
    let resultado = document.getElementById('textoResultado');
    let inputTexto = document.getElementById('inputTexto');
    let textoOriginal = inputTexto.value.toLowerCase();
    let textoDescri = descriptografarTexto(textoOriginal);
    resultado.innerHTML = textoDescri;
}

function copiarResultado(){
    

}
   
   
   
 