import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("submit", pegarMensagem);

document.getElementById("decifrar").addEventListener("submit", pegarMensagemDec);


function pegarMensagem() {
  event.preventDefault()
  try { 
    const mensagem = document.getElementById("mensagem").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const mensagemCifrada = cipher.encode(deslocamento, mensagem);
    document.getElementById("mensagemCifrada").textContent = mensagemCifrada;
  } catch (error) {
    alert('Erro ao codificar' + error.message)
  }
}

function pegarMensagemDec(){
  event.preventDefault()
  try{
    const decodificando = document.getElementById("decodificando").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const mensagemDec = cipher.decode(deslocamento, decodificando);
    document.getElementById("mensagemDescifrada").textContent = mensagemDec;
  } catch (error) {
    alert('Erro ao decodificar' + error.message)
  }
}



const trocaMetodo = document.querySelector('.trocaMetodo')

trocaMetodo.addEventListener('click', function(){
  const formCifrar = document.querySelector('#cifrar')
  const gif = document.querySelector('.gifContainer')
  const formDescifrar = document.querySelector('#decifrar')

  formCifrar.classList.toggle('oculto')
  gif.classList.toggle('oculto')
  
  setTimeout(function(){
    gif.classList.toggle('oculto')
    formDescifrar.classList.toggle('oculto')
  }, 3000)
})


