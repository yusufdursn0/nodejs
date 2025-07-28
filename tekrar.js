function tekrarsizElemanlar(dizi) {
  const sayac = {};
  const sonuc = [];

  
  for (let i = 0; i < dizi.length; i++) {
    const eleman = dizi[i];
    sayac[eleman] = (sayac[eleman] || 0) + 1;
  }

  
  for (let i = 0; i < dizi.length; i++) {
    if (sayac[dizi[i]] === 1) {
      sonuc.push(dizi[i]);
    }
  }

  return sonuc;
}


console.log(tekrarsizElemanlar(['a', 'b', 'a', 'c', 'd', 'b'])); 
console.log(tekrarsizElemanlar([1, 2, 2, 3, 4, 1, 5]));   
