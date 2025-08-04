function sesliHarfSayisi(cumle) {
  const sesliHarfler = "aeıioöuüAEIİOÖUÜ";
  let sayac = 0;

  for (let i = 0; i < cumle.length; i++) {
    if (i < cumle.length) {  
      let harf = cumle[i];

      if (sesliHarfSayisi) {
        sayac++ ;
      }
    }
  }

  return sayac;
}

const cumle = "Merhaba, benim adım Yusuf.";


