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

  public getTail() {
    let current: SinglyLinkedListNode<E> = this;

    while (current.next) {
      current = current.next;
    }

    return current;
  }
}

function reproduceByN(
  head: SinglyLinkedListNode<number>,
  n: number,
): SinglyLinkedListNode<number> {
  if (n <= 0) {
    throw new Error('n must be a positive integer.');
  }

  const baseHead = head.clone();

  let tail = head.getTail();

  for (let index = 0; index < n - 1; index++) {
    tail.next = baseHead.clone();
    tail = tail.getTail();
  }

  return head;
}
