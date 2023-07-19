import cipher from './cipher.js';

document.getElementById("btnCifrar").addEventListener("click", cipher.encode);
document.getElementById("btnDecifrar").addEventListener("click", cipher.decode);

