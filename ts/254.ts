function isPangram(string: string): boolean {
  const ALL_ALPHABET_COUNT = 26;
  const alphabetSet = new Set<string>();

  for (const char of string.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      alphabetSet.add(char);
    }
  }

  return alphabetSet.size === ALL_ALPHABET_COUNT;
}
