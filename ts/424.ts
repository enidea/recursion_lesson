class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function findMinNum(head: SinglyLinkedListNode<number>): number {
  let min = head.data;
  let minIndex = 0;
  let current: SinglyLinkedListNode<number> | null = head.next;
  let index = 1;

  while (current !== null) {
    if (current.data <= min) {
      min = current.data;
      minIndex = index;
    }

    current = current.next;
    index++;
  }

  return minIndex;
}
