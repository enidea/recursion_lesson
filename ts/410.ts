class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

const makeListFromHead = (head: SinglyLinkedListNode<number>) => {
  const list: number[] = [head.data];
  let current = head;

  while (current.next !== null) {
    current = current.next;
    list.push(current.data);
  }

  return list;
};

function findMergeNode(
  headA: SinglyLinkedListNode<number>,
  headB: SinglyLinkedListNode<number>,
): number {
  const aList = makeListFromHead(headA);
  const bList = makeListFromHead(headB);

  aList.reverse();
  bList.reverse();

  let result = -1;
  let index = 0;

  while (
    index < aList.length &&
    index < bList.length &&
    aList[index] === bList[index]
  ) {
    result = aList[index];
    index++;
  }

  return result;
}
