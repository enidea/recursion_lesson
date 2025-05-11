const swap = <T>(arr: T[], indexA: number, indexB: number) => {
  if (indexA === indexB) {
    return;
  }

  const a = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = a;
};

const maxHeapify = (intArr: number[], index: number) => {
  const length = intArr.length;
  let currentIndex = index;

  while (true) {
    let maxValueIndex = currentIndex;

    const compare = (comparisonIndex: number) => {
      if (
        comparisonIndex < length &&
        intArr[comparisonIndex] > intArr[maxValueIndex]
      ) {
        maxValueIndex = comparisonIndex;
      }
    };

    compare(currentIndex * 2 + 1);
    compare(currentIndex * 2 + 2);

    if (currentIndex === maxValueIndex) {
      return;
    }

    swap(intArr, currentIndex, maxValueIndex);

    currentIndex = maxValueIndex;
  }
};

function buildMaxHeap(intArr: number[]): number[] {
  const lastParentIndex = Math.floor((intArr.length - 1) / 2);

  for (let index = lastParentIndex; index >= 0; index--) {
    maxHeapify(intArr, index);
  }

  return intArr;
}
