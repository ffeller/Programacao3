let n1 = 2;
let n2 = 7;
let n3 = 5;
let maior = n1;
let menor = n1;

if (maior < n2) {
  maior = n2;
} 
if (maior < n3) {
  maior = n3;
} 

if (menor > n2) {
  menor = n2;
} 
if (menor > n3) {
  menor = n3;
} 

console.log(`Números: ${n1}, ${n2} e ${n3}`);
console.log(`Ǹúmero maior: ${maior}`);
console.log(`Ǹúmero menor: ${menor}`);
