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

function successor(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  let current = root;
  let successor: BinaryTree<number> | null = null;

  while (current && current.data !== key) {
    if (current.data > key && (!successor || current.data < successor.data)) {
      successor = current;
    }

    current = current.data > key ? current.left : current.right;
  }

  if (!current) {
    return null;
  }

  if (current.right) {
    successor = current.right;
  }

  while (successor?.left && successor.left.data > key) {
    successor = successor.left;
  }

  return successor;
}
