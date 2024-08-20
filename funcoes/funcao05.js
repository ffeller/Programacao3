function maiorIdade(idade) {
  if (idade >= 18) {
    return 'Maior de idade';
  } else {
    return 'Menor de idade';
  }
}

let idade = 18;
console.log(`Idade: ${idade} ${maiorIdade(idade)}`);
