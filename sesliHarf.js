function countVowels(sentence) {
  
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
const sentence = "Merhaba. Node.js eğitimine hoşgeldin.";
const totalVowels = countVowels(sentence);
console.log(`Sesli harf sayısı: ${totalVowels}`);