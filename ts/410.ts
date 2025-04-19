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
  const aLength = getLength(headA);
  const bLength = getLength(headB);

  let aCurrent = headA;
  let bCurrent = headB;

  if (aLength > bLength) {
    for (let index = 0; index < aLength - bLength; index++) {
      if (aCurrent.next === null) {
        throw new Error('Invalid list');
      }

      aCurrent = aCurrent.next;
    }
  }

  if (aLength < bLength) {
    for (let index = 0; index < bLength - aLength; index++) {
      if (bCurrent.next === null) {
        throw new Error('Invalid list');
      }

      bCurrent = bCurrent.next;
    }
  }

  let result = -1;

  while (aCurrent.next !== null && bCurrent.next !== null) {
    if (aCurrent.next.data === bCurrent.next.data) {
      if (result === -1) {
        result = aCurrent.next.data;
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
