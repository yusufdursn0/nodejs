function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];