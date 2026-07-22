export function bubbleSort(upperArray: number[]): number[] {
  let array = [...upperArray];
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array: number[], first: number, last: number) {
  [array[first], array[last]] = [array[last], array[first]];
}
