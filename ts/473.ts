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

function maximumDepth(root: BinaryTree<number> | null): number {
  if (!(root && (root.left || root.right))) {
    return 0;
  }

  return Math.max(maximumDepth(root.left), maximumDepth(root.right)) + 1;
}
