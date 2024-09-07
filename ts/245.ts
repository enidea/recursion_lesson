function maxAscilString(stringList: string[]): number {
  return stringList
    .map((str) =>
      [...str].reduce((total, char) => total + char.charCodeAt(0), 0),
    )
    .reduce(
      (maxIndex, value, index, list) =>
        value > list[maxIndex] ? index : maxIndex,
      0,
    );
}
