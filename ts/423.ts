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
  const first = head;
  let pre = first;
  let cur = pre.next;

  if (cur === null) {
    return null;
  }

  while (cur?.next !== null) {
    pre = cur;
    cur = cur.next;
  }

  pre.next = null;

  return first;
}
