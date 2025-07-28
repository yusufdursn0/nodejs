const reshapeArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boyut = 2;
console.log(reshapeArray(dizi, boyut));