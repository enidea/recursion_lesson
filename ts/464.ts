class BinaryTree<E> {
  data: E;
  left: BinaryTree<E> | null;
  right: BinaryTree<E> | null;

  constructor(
    data: E,
    left: BinaryTree<E> | null = null,
    right: BinaryTree<E> | null = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function sortedArrToBST(numberList: number[]): BinaryTree<number> | null {
  if (numberList.length === 0) {
    return null;
  }

  const rootIndex = Math.floor((numberList.length - 1) / 2);
  const rootData = numberList[rootIndex];

  const left = sortedArrToBST(numberList.slice(0, rootIndex));
  const right = sortedArrToBST(numberList.slice(rootIndex + 1));

  return new BinaryTree(rootData, left, right);
}
