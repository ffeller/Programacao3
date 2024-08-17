let n1 = 5;
let n2 = 2;
let n3 = 7;

let a1 = n1;
if (a1 <= n2) {
  a1 = n2;
}
if (a1 <= n3) {
  a1 = n3;
}

let a2 = n1;
if (a2 <= n2 & a2 < a1) {
  a2 = n2;
}
if (a2 <= n3 & a2 < a1) {
  a2 = n3;
}

let a3 = n1;
if (a3 <= n2 & a3 < a2) {
  a3 = n2;
}
if (a3 <= n3 & a3 < a2) {
  a3 = n3;
}

console.log(`Sequência original: ${n1}, ${n2}, ${n3}`);
console.log(`Sequência ordenada: ${a1}, ${a2}, ${a3}`);
