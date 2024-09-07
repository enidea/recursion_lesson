function hasPenalty(records: number[]): boolean {
  return records.slice(1).some((record, index) => records[index] > record);
}
