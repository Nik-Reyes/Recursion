function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const midpoint = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, midpoint);
    const rightHalf = arr.slice(midpoint);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    console.log("left half: ", sortedLeft);
    console.log("right half: ", sortedRight);

    let mergeArray = [];
    let idxLeft = 0;
    let idxRight = 0;

    while (idxLeft < sortedLeft.length && idxRight < sortedRight.length) {
      if (sortedLeft.at(idxLeft) < sortedRight.at(idxRight)) {
        mergeArray.push(sortedLeft.at(idxLeft));
        idxLeft++;
      } else if (sortedLeft.at(idxLeft) > sortedRight.at(idxRight)) {
        mergeArray.push(sortedRight.at(idxRight));
        idxRight++;
      } else {
        mergeArray = [
          ...mergeArray,
          sortedLeft.at(idxLeft),
          sortedRight.at(idxRight),
        ];
        idxLeft++;
        idxRight++;
      }
    }

    if (idxLeft >= sortedLeft.length) {
      return [...mergeArray, ...sortedRight.slice(idxRight)];
    } else if (idxRight >= sortedRight.length) {
      return [...mergeArray, ...sortedLeft.slice(idxLeft)];
    } else {
      return mergeArray;
    }
  }
}
console.log(mergeSort([4, 2, 7, 1, 9, 3, 8, 5, 6]));
