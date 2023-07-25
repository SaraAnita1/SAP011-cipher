const cipher = {
  encode: (mensagem, descolamento) => {
    try {
      
      const mensagemSemEspaco = mensagem.trim();

      let mensagemInserida = "";
      let mensagemValida = true;
      
      for (let i = 0; i < mensagemSemEspaco.length; i++) {
        let charCode = mensagemSemEspaco.charCodeAt(i);

        // ASC II usado como referencia.
        // o descolamento escolhido foi 2
        // A -> C; a -> c
        // o %26 está ali pra garantir que o looping fique entre as 26 letras do alfabeto
        // considerando que a letra a está na posição 0

        if (charCode >= 65 && charCode <= 90 || charCode === 32) {
          charCode = ((charCode - 65 + descolamento) % 26) + 65;
        } else {
          mensagemValida = false;
          break;
        }

        mensagemInserida += String.fromCharCode(charCode);
      }

      // Verifica se a mensagem é válida antes de atribuí-la ao elemento HTML.
      if (!mensagemValida) {
        throw new TypeError('Por favor, Insira um Caracter de A - Z', 'cipher.js', '25');
      }

      document.getElementById("mensagemCifrada").textContent = mensagemInserida;
    } catch (error) {
      // Aqui, no bloco "catch", trata o erro.
      alert('Erro');
    }
  },

  decode: (decodificando, descolamento) => {
    try {

      const decoSemEspaco = decodificando.trim();

      let mensagemDecifrada = ""; // Alterado para "let" em vez de "const"
      let mensagemVazia = true;

      if (!decoSemEspaco) {
        return window.alert('Por favor, insira uma mensagem');
      }

      for (let i = 0; i < decoSemEspaco.length; i++) {
        let charCode = decoSemEspaco.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90 || charCode === 32) {
          charCode = ((charCode - 65 - descolamento) % 26) + 65;
        } else {
          mensagemVazia = false;
          break;
        }

        mensagemDecifrada += String.fromCharCode(charCode);
      }

      // Verifica se a mensagem foi decifrada corretamente antes de atribuí-la ao elemento HTML.
      if (!mensagemVazia) {
        throw new TypeError('Por favor, Insira um Caracter de A - Z', 'cipher', '49');
      }

      document.getElementById("mensagemDescifrada").textContent = mensagemDecifrada;
    } catch (error) {
      // Aqui, no bloco "catch", tratamos o erro.
      // Exibimos uma mensagem de erro na tela para o usuário.
      alert('Erro');
    }
  }
};


export default cipher
