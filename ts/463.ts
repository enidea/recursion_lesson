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

function maximumNode(root: BinaryTree<number>): BinaryTree<number> {
  let currentRoot = root;

  while (currentRoot?.right) {
    currentRoot = currentRoot.right;
  }

  return currentRoot;
}

function predecessor(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  let current = root;
  let predecessor: BinaryTree<number> | null = null;

  while (current) {
    if (current.data === key) {
      if (current.left) {
        return maximumNode(current.left);
      }

      break;
    }

    if (current.data > key) {
      current = current.left;
    } else {
      predecessor = current;
      current = current.right;
    }
  }

  if (!current) {
    throw new Error('Invalid input.');
  }

  return predecessor;
}
