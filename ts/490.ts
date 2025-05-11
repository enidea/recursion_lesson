const swap = (arr: unknown[], indexA: number, indexB: number) => {
  if (indexA === indexB) {
    return;
  }

  const a = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = a;
};

const maxHeapify = (intArr: number[], index: number) => {
  let currentIndex = index;

  while (true) {
    let maxValueIndex = currentIndex;

    const compare = (comparisonIndex: number) => {
      if (
        intArr[comparisonIndex] &&
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
  const length = intArr.length;
  let depth = Math.floor(Math.log2(length)) - 1;

  while (depth >= 0) {
    for (
      let index = 2 ** depth;
      index < Math.min(length, 2 ** (depth + 1));
      index++
    ) {
      maxHeapify(intArr, index - 1);
    }
    depth--;
  }

  return intArr;
}
