function enCokTekrar(str) {
  let max = 0, sayac = {};
 

  for (let c of str.toLowerCase()) {
    if (!(c in sayac)) {
      sayac[c] = 0;
    }

    sayac[c]++;

    if (sayac[c] > max) {
      max = sayac[c];
    }
  }

  return max;
}

console.log(enCokTekrar("Merhaba. Node.js eğitimine hoşgeldiniz."));
