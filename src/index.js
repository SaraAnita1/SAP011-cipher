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

const elementoOculto = document.getElementById("decifrar");
const botaoMostrar = document.getElementById("botaoMostrar");
const gifContainer = document.getElementById("caixaDoGif")

botaoMostrar.addEventListener("click", function(){
  //exibir o gif
  gifContainer.style.display = "block";
  botaoMostrar.style.display = "none";

  const tempoExibiçãoGif = 3000;

  setTimeout(function(){

    gifContainer.style.display = "none";
    elementoOculto.style.display = "block";

    botaoMostrar.scrollIntoView({ behavior: "smooth" }); 
  }, tempoExibiçãoGif);
  
});

