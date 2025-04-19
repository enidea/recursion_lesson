class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function linkedListLastValue(head: SinglyLinkedListNode<number>): number {
  let cur: SinglyLinkedListNode<number> = head;

  while (cur.next !== null) {
    cur = cur.next;
  }

  return cur.data;
}
