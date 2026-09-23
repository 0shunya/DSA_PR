function linearSearch(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n; i++){
        if (nums[i] === target){
            return i;
        }
    }
    return -1;
}


// Usage example
const numbers = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(numbers, target);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found");
}