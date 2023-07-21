import cipher from './cipher.js';

document.getElementById("btnCifrar").addEventListener("click", cipher.encode);
document.getElementById("btnDecifrar").addEventListener("click", cipher.decode);

// const mensagem = document.getElementById("mensagem").value;

// criar função para tirar o mensagem da parte cipher 