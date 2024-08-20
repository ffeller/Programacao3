const estudanteReprovou =  (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
}

const soma = (numA, numB) => numA + numB;

console.log(estudanteReprovou(8, 3));

console.log(soma(8, 3));


