function ortakElemanlar(dizi1, dizi2) {
  const sonuc = [];

  for (let i = 0; i < dizi1.length; i++) {
    const eleman = dizi1[i];

    let varMi = false;
    for (let j = 0; j < dizi2.length; j++) {
      if (dizi2[j] === eleman) {
        varMi = true;
        break;
      }
    }
 
    if (varMi) {
      let dahaOnceVarMi = false;
      for (let k = 0; k < sonuc.length; k++) {
        if (sonuc[k] === eleman) {
          dahaOnceVarMi = true;
          break;
        }
      }

      if (!dahaOnceVarMi) {
        sonuc.push(eleman);
      }
    }
  }

  return sonuc;
}
const diziA = [1, 5, 7, 9, 3];
const diziB = [3, 4, 5, 6, 7];

console.log(ortakElemanlar(diziA, diziB));