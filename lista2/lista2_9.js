let n1 = 5;
let n2 = 2;
let n3 = 7;
let x;

console.log(`Sequência original: ${n1}, ${n2}, ${n3}`);

if (n1 < n2) {
  x = n1;
  n1 = n2;
  n2 = x;
}
if (n1 < n3) {
  x = n1;
  n1 = n3;
  n3 = x;
}
if (n2 < n3) {
  x = n2;
  n2 = n3;
  n3 = x;
}

console.log(`Sequência ordenada: ${n1}, ${n2}, ${n3}`);
