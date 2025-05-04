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

function minimumNode(root: BinaryTree<number>): BinaryTree<number> {
  let currentNode = root;

  while (currentNode?.left) {
    currentNode = currentNode.left;
  }

  return currentNode;
}

function successor(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  let current = root;
  let successor: BinaryTree<number> | null = null;

  while (current) {
    if (current.data === key) {
      if (current.right) {
        return minimumNode(current.right);
      }

      break;
    }

    if (current.data > key) {
      successor = current;
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return successor;
}
