const cipher = {
  encode:(mensagem) => {
    
    let mensagemInserida = "";
  
    for (let i = 0; i < mensagem.length; i++) {
      let charCode = mensagem.charCodeAt(i);
      // ASC II usado como referencia.
      // o descolamento escolhido foi 2
      // A -> C; a -> c
      // o %26 está ali pra garantir que o looping fique entre as 26 letras do alfabeto
      // considerando que a letra a está na posição 0
  
      // //Letras Maiusculas
      // if (charCode >= 65 && charCode <= 90){
      //   charCode = ((charCode - 65 + 2)% 26) + 65;
  
      // //Letras Minusculas
      // } else if (charCode >= 97 && charCode <= 122) {
      //   charCode = ((charCode - 97 + 2) % 26) + 97;
      // }
  
      // resolvi fazer com o alfabeto todo para incluir palavras com acento na codificação
      //pesquisar typeof / const mensagem = document.getElementById("mensagem").value;
      charCode = (charCode + 2) % 255
      mensagemInserida += String.fromCharCode(charCode);
    }
    document.getElementById("mensagemCifrada").textContent = mensagemInserida;

  },
  decode:() => {
    const decodificando = document.getElementById("decodificando").value;
    let mensagemDescifrada = "";
  
    for (let i = 0; i < decodificando.length; i++) {
      let charCode = decodificando.charCodeAt(i);
      charCode = (charCode - 2) % 255;
      mensagemDescifrada += String.fromCharCode(charCode);
    }
  
    document.getElementById("mensagemDescifrada").textContent = mensagemDescifrada;
    
  }
}

export default cipher
