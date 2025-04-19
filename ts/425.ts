class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function linkedListSearch(
  head: SinglyLinkedListNode<number>,
  data: number,
): number {
  let index = 0;
  let current: SinglyLinkedListNode<number> | null = head;

  while (current !== null) {
    if (current.data === data) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
}
