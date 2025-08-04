function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];
    
    if (count1[char1]) {
      count1[char1]++;
    } 

    if (count2[char2]) {
      count2[char2]++;
    } 
  }

  for (let harf in count1) {
    if (count1[harf] !== count2[harf]) {
      return false;
    }
  }

  return true ;
}


console.log(isAnagram("yusuf", "dursun"));   
