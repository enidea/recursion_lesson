function websitePagination(
  urls: string[],
  pageSize: number,
  page: number,
): string[] {
  const start = pageSize * (page - 1);

  return urls.slice(start, start + pageSize);
}
