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

function exists(root: BinaryTree<number> | null, key: number): boolean {
  let currentRoot = root;

  while (currentRoot) {
    if (currentRoot.data === key) {
      return true;
    }

    currentRoot = currentRoot.data > key ? currentRoot.left : currentRoot.right;
  }

  return false;
}
