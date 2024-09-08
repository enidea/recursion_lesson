function primesUpToNCount(n: number): number {
  const isPrime = Array(n + 1).fill(true);
  let primeCount = 0;

  for (let number = 2; number < n; number++) {
    if (isPrime[number]) {
      primeCount++;

      for (let multiple = number * 2; multiple < n; multiple += number) {
        isPrime[multiple] = false;
      }
    }
  }

  return primeCount;
}
