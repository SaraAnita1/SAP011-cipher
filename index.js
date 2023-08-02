import cipher from './cipher.js';

document.querySelector('form').addEventListener('submit', validarForm)

function validarForm(){
  event.preventDefault()

  if(document.querySelector('form').className === 'cifrar'){
    pegarMensagem()
  } else {
    pegarMensagemDec()
  } 
}



function pegarMensagem() {
  try { 
    const mensagem = document.getElementById("mensagem").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const mensagemCifrada = cipher.encode(deslocamento, mensagem);
    document.getElementById("mensagemCifrada").textContent = mensagemCifrada; 
    // localStorage.setItem('mensagemCifrada', mensagemCifrada)
  } catch (error) {
    alert('Erro ao codificar' + error.message)
  }
}

function pegarMensagemDec(){
  try{
    const decodificando = document.getElementById("mensagem").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const mensagemDec = cipher.decode(deslocamento, decodificando);
    document.getElementById("mensagemCifrada").textContent = mensagemDec;
  } catch (error) {
    alert('Erro ao decodificar' + error.message)
  }
}



const trocaMetodo = document.querySelector('.trocaMetodo')

trocaMetodo.addEventListener('click', function(){

  const form = document.querySelector("form")
  document.querySelector('p').innerHTML = ''
  document.querySelector('textarea').value = ''
  form.classList.toggle("cifrar")
  form.classList.toggle("decifrar")

  if(form.className === "decifrar"){
    document.querySelector('form button').innerHTML = 'Decodificar'
    document.querySelector('.trocaMetodo').innerHTML = 'Deseja Codificar ?'
  } else {
    document.querySelector('form button').innerHTML = 'Codificar'
    document.querySelector('.trocaMetodo').innerHTML = 'Deseja Decodificar ?'
  }

  loading()
})

function loading(){
  document.querySelector('.des').classList.add('oculto')
  document.querySelector('form').classList.add('oculto')
  document.querySelector('.trocaMetodo').classList.add('oculto')
  document.querySelector('figure').classList.remove('oculto')

  setTimeout(function(){
    document.querySelector('.des').classList.remove('oculto')
    document.querySelector('form').classList.remove('oculto')
    document.querySelector('.trocaMetodo').classList.remove('oculto')
    document.querySelector('figure').classList.add('oculto')
  }, 3000)
}


