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

function validateBST(root: BinaryTree<number> | null): boolean {
  const validate = (
    current: BinaryTree<number> | null,
    max = Number.MAX_SAFE_INTEGER,
    min = Number.MIN_SAFE_INTEGER,
  ) => {
    return (
      !current ||
      (min < current.data &&
        current.data < max &&
        (!current.left || current.data > current.left.data) &&
        (!current.right || current.data < current.right.data) &&
        validate(current.left, Math.min(max, current.data), min) &&
        validate(current.right, max, Math.max(min, current.data)))
    );
  };

  return validate(root);
}
