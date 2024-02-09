let textoResultado = document.getElementById('textoResultado').innerHTML
let inputTexto = document.getElementById('inputTexto')


function checarInput(){
    let inputValor = document.getElementById('inputTexto').value;
    let botaoCripto = document.getElementById('botaoCripto');

    if (inputValor.trim() !== ''){
        botaoCripto.disabled = false;
        botaoDescri.disabled = false;
        botaoCripto.classList.remove('disabled');
        botaoDescri.classList.remove('disabled')

    } 
    else{
        botaoCripto.disabled = true;
        botaoDescri.disabled = true;
        botaoCripto.classList.add('disabled');
        botaoDescri.classList.add('disabled')

    }

}


function criptografarTexto(){
    let resultado = document.getElementById('textoResultado');
    let botaoCopiar = document.querySelector('#botaoCopiar');

    inputValor = document.getElementById('inputTexto').value.toLowerCase();
    inputValor = inputValor.replace(/e/g, 'enter');
    inputValor = inputValor.replace(/i/g, 'imes');
    inputValor = inputValor.replace(/a/g, 'ai');
    inputValor = inputValor.replace(/o/g, 'ober');
    inputValor = inputValor.replace(/u/g, 'ufat');
    
    if(inputValor.value().trim !== ''){
        botaoCopiar.disabled = true;
        botaoCopiar.classList.add('disabled');
    }
    resultado.innerHTML = inputValor;

    botaoCopiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(inputValor);

})



   }

   function descriptografarTexto(){

    let resultado = document.getElementById('textoResultado');
    let botaoCopiar = document.querySelector('#botaoCopiar');

    inputValor = document.getElementById('inputTexto').value.toLowerCase();
    inputValor = inputValor.replace(/enter/g, 'e');
    inputValor = inputValor.replace(/imes/g, 'i');
    inputValor = inputValor.replace(/ai/g, 'a');
    inputValor = inputValor.replace(/ober/g, 'o');
    inputValor = inputValor.replace(/ufat/g, 'u');
    
    resultado.innerHTML = inputValor;
    botaoCopiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(inputValor);

   })
}

   
   
   
 