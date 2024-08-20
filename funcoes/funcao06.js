function ehPalindrome(palavra) {
  let aux = palavra.split('').reverse().join('');

  if (aux == palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(ehPalindrome('xxsubinoonibus'));
