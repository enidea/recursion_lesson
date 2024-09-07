function isMountain(height: number[]): boolean {
  let up = true;

  return (
    height.length >= 3 &&
    height.slice(1).every((h, index) => {
      if (index >= 1 && up && height[index] > h) {
        up = false;
      }

      return (up && height[index] < h) || (!up && height[index] > h);
    }) &&
    !up
  );
}
