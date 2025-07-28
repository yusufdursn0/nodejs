function sekillendir(arr, satir, sutun) {
  const sonuc = [];
  let index = 0;

  for (let i = 0; i < satir; i++) {
    const satirDizi = [];
    for (let j = 0; j < sutun; j++) {
      satirDizi.push(arr[index] !== undefined ? arr[index] : undefined);
      index++;
    }
    sonuc.push(satirDizi);
  }

  return sonuc;
}


console.log(sekillendir([1, 2, 3, 6, 5], 3, 4));