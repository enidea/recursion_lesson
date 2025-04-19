class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function insertAtPosition(
  head: SinglyLinkedListNode<number>,
  position: number,
  data: number,
): SinglyLinkedListNode<number> {
  let index = 0;
  let cur: SinglyLinkedListNode<number> | null = head;

  while (cur !== null) {
    if (index === position) {
      const next = cur.next;
      const nodeToBeInserted: SinglyLinkedListNode<number> = { data, next };
      cur.next = nodeToBeInserted;
    }

    index++;
    cur = cur.next;
  }

  return head;
}
