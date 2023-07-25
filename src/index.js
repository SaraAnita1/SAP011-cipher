import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("submit", pegarMensagem);

document.getElementById("decifrar").addEventListener("submit", pegarMensagemDec);


function pegarMensagem() {
  event.preventDefault()
  const mensagem = document.getElementById("mensagem").value;
  cipher.encode(mensagem)
  const deslocamento = parseInt(document.getElementById("deslocamento").value);
  cipher.encode(mensagem, deslocamento);

}

function pegarMensagemDec(){
  event.preventDefault()
  const decodificando = document.getElementById("decodificando").value;
  cipher.decode(decodificando)
  const deslocamento = parseInt(document.getElementById("deslocamento").value);
  cipher.decode(decodificando, deslocamento);
}


// criar função para tirar o mensagem da parte cipher 