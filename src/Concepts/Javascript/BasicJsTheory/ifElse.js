function checkPositive(number) {
  const positive = number % 2 === 0 && number > 0;
  if (positive) {
    return true;
  }
  return false;
}

console.log(checkPositive(13));
checkPositive(13);
console.log(
  '🚀 ~ file: ifElse.js ~ line 11 ~ checkPositive(13)',
  checkPositive(13)
);
// Nên dùng cấu trúc ( if ... return ) rather than ( if .... else )
