function harfSayisi(kelime, harf) {
  return kelime.toLowerCase().split(harf.toLowerCase()).length - 1;
}

console.log(harfSayisi("Merhaba.", "a"))