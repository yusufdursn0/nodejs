function parantezDengeliMi(cumle) {
  let sayac = 0; // Parantez sayacını tutar

  for (let i = 0; i < cumle.length; i++) {
    let karakter = cumle[i];

    if (karakter === '(') {
      sayac++; 
    }

    if (karakter === ')') {
      sayac--; 

      if (sayac < 0) {
        
        return false;
      }
    }
  }

  
  if (sayac === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(parantezDengeliMi("(merhaba)"));
console.log(parantezDengeliMi("(merhaba (benim adım yusuf)"));
