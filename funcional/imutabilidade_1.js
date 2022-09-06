function ordenar(arr) {
  return [...arr].sort((a, b) => a - b);
}

const nums = [5, 6, 8, 4, 25, 8, 478];
console.log(ordenar(nums))
console.log(nums);
