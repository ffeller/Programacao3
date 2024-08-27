const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante);

console.log(estudante.nome);
console.log(estudante.cpf);

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

// const chavesObjeto = Object.keys(estudante);
// console.log(chavesObjeto);
// const valoresObjeto = Object.values(estudante);
// console.log(valoresObjeto);
// const entradasObjeto = Object.entries(estudante);
// console.log(entradasObjeto);
