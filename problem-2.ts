{
  // Problem-2
  const removeDuplicates = (arrOfNum: number[]): number[] => {
    let uniqueArray: number[] = arrOfNum.filter(
      (number, index) => arrOfNum.indexOf(number) === index
    );

    return uniqueArray;
  };

  const uniqueArray: number[] = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(uniqueArray);
}
