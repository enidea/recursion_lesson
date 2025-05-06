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

function symmetricTree(root: BinaryTree<number> | null): boolean {
  if (!root) {
    return true;
  }

  const symmetricTreeHelper = (
    left: BinaryTree<number> | null,
    right: BinaryTree<number> | null,
  ): boolean => {
    if (!(left || right)) {
      return true;
    }

    if (!(left && right) || left.data !== right.data) {
      return false;
    }

    return (
      symmetricTreeHelper(left.left, right.right) &&
      symmetricTreeHelper(left.right, right.left)
    );
  };

  return symmetricTreeHelper(root.left, root.right);
}
