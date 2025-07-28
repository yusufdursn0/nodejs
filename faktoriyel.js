function faktoriyel(n) {

  let sonuc = 1;
  for (let i = 2; i <= n; i++) {
    sonuc *= i;
  }
  return sonuc;
}

console.log(faktoriyel(7));