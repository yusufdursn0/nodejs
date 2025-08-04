function countVowels(sentence) {
  

  let count = 0;

  for (let char of sentence) {
    if (
      char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      count++;
    }
  }

  return count;
}
const sentence = "Merhaba. Node.js eğitimine hoşgeldin.";
const totalVowels = countVowels(sentence);
console.log(`Sesli harf sayısı: ${totalVowels}`);