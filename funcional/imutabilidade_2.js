const numbers = [1, 2, 3];

// #1 Declarativo
let total = 0;
for (const num of nums) {
  total += num;
}
console.log(total);

// #2 Imperativo
const total2 = nums.reduce((acc, curr) => acc + curr);
console.log(total2);

// #3 Declarativo com recursividade
function calcTotal(nums) {
  return nums.length ? nums[0] + calcTotal(nums.slice(1)) : 0;
}
console.log(calcTotal(nums));
