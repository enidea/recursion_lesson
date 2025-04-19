class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

function insertNodeInSorted(
  head: SinglyLinkedListNode<number>,
  data: number,
): SinglyLinkedListNode<number> {
  let cur: SinglyLinkedListNode<number> | null = head;
  const newNode = new SinglyLinkedListNode(data);

  if (cur.data >= data) {
    newNode.next = cur;
    return newNode;
  }

  while (cur !== null) {
    if (cur.next === null) {
      cur.next = newNode;
      return head;
    }

    if (cur.next.data >= data) {
      newNode.next = cur.next;
      cur.next = newNode;
      return head;
    }

    cur = cur.next;
  }

  throw new Error('Unreachable');
}
