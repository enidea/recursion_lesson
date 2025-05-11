const swap = <T>(arr: T[], indexA: number, indexB: number) => {
  if (indexA === indexB) {
    return;
  }

  const a = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = a;
};

const minHeapify = (intArr: number[], index: number) => {
  const length = intArr.length;
  let currentIndex = index;

  while (true) {
    let currentMinValueIndex = currentIndex;

    const compare = (comparisonIndex: number) => {
      if (
        comparisonIndex < length &&
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

function buildMinHeap(intArr: number[]): number[] {
  const lastParentIndex = Math.floor((intArr.length - 1) / 2);

  for (let index = lastParentIndex; index >= 0; index--) {
    minHeapify(intArr, index);
  }

  return intArr;
}
