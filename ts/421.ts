class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function linkedListLength(head: SinglyLinkedListNode<number>): number {
  let length = 0;
  let cur: SinglyLinkedListNode<number> | null = head;

  while (cur !== null) {
    length++;
    cur = cur.next;
  }

  return length;
}
