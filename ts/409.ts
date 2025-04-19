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
  const newNode = new SinglyLinkedListNode(data);

  if (head.data >= data) {
    newNode.next = head;
    return newNode;
  }

  let cur = head;

  while (cur.next !== null && cur.next.data < data) {
    cur = cur.next;
  }

  newNode.next = cur.next;
  cur.next = newNode;

  return head;
}
