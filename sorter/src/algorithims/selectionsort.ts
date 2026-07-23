export function selectionSort(upperArray: number[]): number[] {
  let array = [...upperArray];

  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) {
        smallestIndex = j;
      }
    }
    swap(array, i, smallestIndex);
  }

  return array;
}

function swap(array: number[], first: number, last: number) {
  [array[first], array[last]] = [array[last], array[first]];
}
