export function insertionSort(upperArray: number[]): number[] {
  let array = [...upperArray];

  for (let i = 1; i < array.length; i++) {
    // I WROTE IT (FUCKING SPLICE)
    // for (let j = i - 1; j >= 0; j--) {
    //   if (array[j] > array[i]) {
    //     if (j > 0) {
    //       if (array[i] >= array[j - 1]) {
    //         let elem = array.splice(i, 1)[0];
    //         array.splice(j, 0, elem);
    //         break;
    //       }
    //     } else {
    //       let elem = array.splice(i, 1)[0];
    //       array.splice(j, 0, elem);
    //     }
    //   }
    // }

    // CLAUD WROTE IT
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }

  return array;
}
