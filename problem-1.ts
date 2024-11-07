{
  // Problem 1
  const sumArray = (arrOfNum: number[]): number => {
    let sum: number = 0;
    arrOfNum.forEach((num) => (sum += num));

    return sum;
  };

  const sum: number = sumArray([1, 2, 3, 4, 5]);
  console.log(sum);
}
