// function rotateByTimes(ids: number[], n: number): number[] {
//   const idsLength = ids.length;
//   const rotationOffset = n % idsLength;

//   const rotatedIds: number[] = Array(idsLength);

//   for (const [index, id] of ids.entries()) {
//     rotatedIds[(index + rotationOffset) % idsLength] = id;
//   }

//   return rotatedIds;
// }

function rotateByTimes(ids: number[], n: number): number[] {
  const idsLength = ids.length;
  const rotationOffset = n % idsLength;

  return ids.map(
    (_, index) => ids[(index + idsLength - rotationOffset) % idsLength],
  );
}
