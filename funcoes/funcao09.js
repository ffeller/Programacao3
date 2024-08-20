function maiorNum(n1, n2, n3) {
  let maior;
  if (n1 > n2) {
    maior = n1;
  } else {
    maior = n2;
  }
  if (n3 > maior) {
    maior = n3;
  }

  return maior;
}

console.log(maiorNum(2,9,6));