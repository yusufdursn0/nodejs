function falsyTemizle(dizi) {
  const temizDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    
    if (dizi[i]) {
      temizDizi.push(dizi[i]);
    }
  }
  return temizDizi;
}


const ornek = [0, 1, null, 2, '', 3, null, true, 4, false, 5];
console.log(falsyTemizle(ornek)); //
