let preco1 = 20;
let prod1 = "Girando Sol"
let preco2 = 70;
let prod2 = "Veja Multiuso"
let preco3 = 50;
let prod3 = "Mr Musculo"

let menor = preco1;
let prod = prod1;

if (menor > preco2) {
  menor = preco2;
  prod = prod2;
} 
if (menor > preco3) {
  menor = preco3;
  prod = prod3;
} 

console.log(`O produto que deve ser comprado é ${prod} no valor de R$${menor}`);

