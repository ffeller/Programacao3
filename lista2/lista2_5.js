let n1=10;
let n2=7;
let n3=8.5;
let n4=9;

let media=(n1 + n2 + n3 + n4) / 4;

console.log(`nota1=${n1} nota2=${n2} nota3=${n3} nota4=${n4}`);
console.log(`media=${media}`);

if (media == 10) {
  console.log("Aluno aprovado com distinção.");
} else if (media >= 7 & media < 10) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}

