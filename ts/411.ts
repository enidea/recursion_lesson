class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }

  public clone() {
    const clone = new SinglyLinkedListNode(this.data);

    if (this.next) {
      clone.next = this.next.clone();
    }

    return clone;
  }
}

function reproduceByN(
  head: SinglyLinkedListNode<number>,
  n: number,
): SinglyLinkedListNode<number> {
  if (n <= 0) {
    throw new Error('n must be natural number.');
  }

  if (n === 1) {
    return head;
  }

  const clonedHead = head.clone();

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  for (let index = 0; index < n - 1; index++) {
    current.next = clonedHead.clone();

    while (current.next !== null) {
      current = current.next;
    }
  }

  return head;
}
