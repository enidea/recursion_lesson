const swap = <T>(arr: T[], indexA: number, indexB: number) => {
  if (indexA === indexB) {
    return;
  }

  const a = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = a;
};

const maxHeapify = (intArr: number[], index: number, targetLength: number) => {
  let currentIndex = index;

  while (true) {
    let currentMaxValueIndex = currentIndex;

    const compare = (comparisonIndex: number) => {
      if (
        comparisonIndex < targetLength &&
        intArr[comparisonIndex] > intArr[currentMaxValueIndex]
      ) {
        currentMaxValueIndex = comparisonIndex;
      }
    };

    compare(currentIndex * 2 + 1);
    compare(currentIndex * 2 + 2);

    if (currentIndex === currentMaxValueIndex) {
      return;
    }

    swap(intArr, currentIndex, currentMaxValueIndex);

    currentIndex = currentMaxValueIndex;
  }
};

function buildMaxHeap(intArr: number[]) {
  const length = intArr.length;
  const lastParentIndex = Math.floor((length - 1) / 2);

  for (let index = lastParentIndex; index >= 0; index--) {
    maxHeapify(intArr, index, length);
  }
}

const heapsort = (intArr: number[], targetLength: number): number[] => {
  buildMaxHeap(intArr);
  let unsortedLength = intArr.length;
  const unnecessarySortLength = intArr.length - targetLength;

  while (unsortedLength > unnecessarySortLength) {
    swap(intArr, 0, unsortedLength - 1);
    unsortedLength--;
    maxHeapify(intArr, 0, unsortedLength);
  }

  intArr.reverse();

  return intArr;
};

function topKElements(intArr: number[], k: number): number[] {
  heapsort(intArr, k);

  return intArr.slice(0, k);
}
