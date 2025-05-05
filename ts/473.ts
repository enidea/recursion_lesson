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
  const getMaximumDepth = (root: BinaryTree<number> | null, depth = 0) => {
    if (!(root && (root.left || root.right))) {
      return depth;
    }

    return Math.max(
      getMaximumDepth(root.left, depth + 1),
      getMaximumDepth(root.right, depth + 1),
    );
  };

  return getMaximumDepth(root);
}
