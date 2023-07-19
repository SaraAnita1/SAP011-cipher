const string = ""
const numero = 1
const array = []
const objeto = {}

const casa = {
  varrer:() => {
    console.log('varrer a casa')
  },
  quantidadePessoas: 3,


}


const lavarLouca = function(louca = 0){
  console.log(`Lavando ${louca} pratos`)
}

const lavarLoucas = () => {
  console.log('Lavando a louça...')
}

console.log(casa.varrer())