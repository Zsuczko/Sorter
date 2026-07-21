export function QuickSort(upperArray: number[]): number[] {
  let array = [...upperArray];

  recursiveSort(array, 0, array.length - 1);

  return array;
}

function recursiveSort(array: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }

  const pivotIndex = end;
  let i = start - 1;
  for (let j = start; j < end; j++) {
    const elem = array[j];
    if (elem < array[pivotIndex]) {
      i++;
      swap(array, j, i);
    }
  }

  swap(array, pivotIndex, i + 1);

  recursiveSort(array, 0, i);
  recursiveSort(array, i + 2, end);
}

function swap(array: number[], first: number, last: number) {
  [array[first], array[last]] = [array[last], array[first]];
}
