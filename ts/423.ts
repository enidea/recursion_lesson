class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function deleteTail(
  head: SinglyLinkedListNode<number>,
): SinglyLinkedListNode<number> | null {
  let cur = head;

  if (cur.next === null) {
    return null;
  }

  while (cur.next && cur.next.next !== null) {
    cur = cur.next;
  }

  cur.next = null;

  return head;
}
