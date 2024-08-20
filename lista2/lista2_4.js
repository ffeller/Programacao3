const letra = 'E';
let resp;
if ( letra == 'a' | letra == 'e' | letra == 'i' | letra == 'o' | letra == 'u'
   | letra == 'A' | letra == 'E' | letra == 'I' | letra == 'O' | letra == 'U') {
  resp = 'vogal';
} else {
  resp = 'consoante';
}

console.log(`letra:${letra} é ${resp}`);
