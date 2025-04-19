class SinglyLinkedListNode<E> {
  public data: E;
  public next: SinglyLinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

const getLength = (head: SinglyLinkedListNode<number>) => {
  let length = 0;
  let current: SinglyLinkedListNode<number> | null = head;

  while (current !== null) {
    current = current.next;
    length++;
  }

  return length;
};

function findMergeNode(
  headA: SinglyLinkedListNode<number>,
  headB: SinglyLinkedListNode<number>,
): number {
  let aLength = getLength(headA);
  let bLength = getLength(headB);

  let aCurrent: SinglyLinkedListNode<number> | null = headA;
  let bCurrent: SinglyLinkedListNode<number> | null = headB;

  while (aLength > bLength) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    aCurrent = aCurrent.next!;
    aLength--;
  }

  while (aLength < bLength) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    bCurrent = bCurrent.next!;
    bLength--;
  }

  let result = -1;

  while (aCurrent !== null && bCurrent !== null) {
    if (aCurrent.data === bCurrent.data) {
      if (result === -1) {
        result = aCurrent.data;
      }
    } else {
      result = -1;
    }

    aCurrent = aCurrent.next;
    bCurrent = bCurrent.next;
  }

  return result;
}

// The space complexity of the following case is O(n+m), so it is inefficient

// const makeListFromHead = (head: SinglyLinkedListNode<number>) => {
//   const list: number[] = [head.data];
//   let current = head;

//   while (current.next !== null) {
//     current = current.next;
//     list.push(current.data);
//   }

//   return list;
// };

// function findMergeNode(
//   headA: SinglyLinkedListNode<number>,
//   headB: SinglyLinkedListNode<number>,
// ): number {
//   const aList = makeListFromHead(headA);
//   const bList = makeListFromHead(headB);

//   aList.reverse();
//   bList.reverse();

//   let result = -1;
//   let index = 0;

//   while (
//     index < aList.length &&
//     index < bList.length &&
//     aList[index] === bList[index]
//   ) {
//     result = aList[index];
//     index++;
//   }

//   return result;
// }
