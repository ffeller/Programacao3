let n1 = 2;
let n2 = 7;
let n3 = 7;
let maior = 0;

if (n1 >= n2 & n1 >= n3) {
  maior = n1;
} else if (n2 >= n1 & n2 >= n3) {
  maior = n2;
} else if (n3 >= n1 & n3 >= n2) {
  maior = n3;
}

console.log(`Números: ${n1}, ${n2} e ${n3}`);
console.log(`Ǹúmero maior: ${maior}`);
