const swap = <T>(arr: T[], indexA: number, indexB: number) => {
  if (indexA === indexB) {
    return;
  }

  const a = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = a;
};

const minHeapify = (intArr: number[], index: number, targetLength: number) => {
  let currentIndex = index;

  while (true) {
    let currentMinValueIndex = currentIndex;

    const compare = (comparisonIndex: number) => {
      if (
        comparisonIndex < targetLength &&
        intArr[comparisonIndex] < intArr[currentMinValueIndex]
      ) {
        currentMinValueIndex = comparisonIndex;
      }
    };

    compare(currentIndex * 2 + 1);
    compare(currentIndex * 2 + 2);

    if (currentIndex === currentMinValueIndex) {
      return;
    }

    swap(intArr, currentIndex, currentMinValueIndex);

    currentIndex = currentMinValueIndex;
  }
};

function buildMinHeap(intArr: number[]) {
  const length = intArr.length;
  const lastParentIndex = Math.floor((length - 1) / 2);

  for (let index = lastParentIndex; index >= 0; index--) {
    minHeapify(intArr, index, length);
  }
}

const heapsort = (intArr: number[], targetLength: number): number[] => {
  buildMinHeap(intArr);
  let unsortedLength = intArr.length;
  const unnecessarySortLength = intArr.length - targetLength;

  while (unsortedLength > unnecessarySortLength) {
    swap(intArr, 0, unsortedLength - 1);
    unsortedLength--;
    minHeapify(intArr, 0, unsortedLength);
  }

  intArr.reverse();

  return intArr;
};

function minKElements(intArr: number[], k: number): number[] {
  heapsort(intArr, k);

  return intArr.slice(0, k);
}
