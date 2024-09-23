const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'Linguagem de programação III',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
    }]
}
// for (let chave in estudante) {
//     const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
//     console.log(texto);
// }

// for (let chave in estudante) {
//   const tipo = typeof estudante[chave];
//   if (tipo !== 'object' && tipo !== 'function')
//       const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
//       console.log(texto);
// }

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);
const valoresObjeto = Object.values(estudante);
console.log(valoresObjeto);
const entradasObjeto = Object.entries(estudante);
console.log(entradasObjeto);

