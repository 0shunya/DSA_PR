function selectionSort(arr) {
    n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = 0; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Original:", arr);
console.log("Sorted:", selectionSort([...arr]));