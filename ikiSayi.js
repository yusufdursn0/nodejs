function toplamVarMi(dizi, hedef) {
  let oncekiSayilar = {};

  for (let i = 0; i < dizi.length; i++) {
    let sayi = dizi[i];
    let gereken = hedef - sayi;

    if (oncekiSayilar[gereken] !== undefined) {
      return true;
    }

    oncekiSayilar[sayi] = true;
  }

  return false;
}

console.log(toplamVarMi([1, 2, 3, 4], 5));  
console.log(toplamVarMi([1, 2, 3, 4], 10));