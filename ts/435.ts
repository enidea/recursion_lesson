type StringComparator = (a: string, b: string) => boolean;
type NotEmptyReadonlyArray<T> = readonly [T, ...T[]];

const maxByCriteria = (
  comparator: StringComparator,
  stringArray: NotEmptyReadonlyArray<string>,
): string => {
  let maxStringIndex = 0;

  for (let index = 1; index < stringArray.length; index++) {
    if (comparator(stringArray[index], stringArray[maxStringIndex])) {
      maxStringIndex = index;
    }
  }

  return stringArray[maxStringIndex];
};

const compareLength = (s1: string, s2: string) => s1.length >= s2.length;

const getTotalAsciiCode = (s: string): number => {
  let total = 0;

  for (const char of s) {
    total += char.charCodeAt(0);
  }

  return total;
};
const compareAsciiTotal = (s1: string, s2: string) =>
  getTotalAsciiCode(s1) >= getTotalAsciiCode(s2);

const testData: [StringComparator, NotEmptyReadonlyArray<string>][] = [
  [compareLength, ['apple', 'yumberry', 'grape', 'banana', 'mandarin']],
  [compareLength, ['zoomzoom', 'choochoo', 'beepbeep', 'ahhhahhh']],
  [compareAsciiTotal, ['apple', 'yumberry', 'grape', 'banana', 'mandarin']],
  [compareAsciiTotal, ['zoom', 'choochoo', 'beepbeep', 'ahhhahhh']],
];

for (const [comparator, stringArray] of testData) {
  console.log(maxByCriteria(comparator, stringArray));
}
