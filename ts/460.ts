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

function minimumNode(
  root: BinaryTree<number> | null,
): BinaryTree<number> | null {
  let currentNode = root;

  while (currentNode?.left) {
    currentNode = currentNode.left;
  }

  return currentNode;
}
