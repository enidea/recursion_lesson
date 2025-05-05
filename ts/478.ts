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
    node: BinaryTree<number> | null,
    min: number,
    max: number,
  ): boolean => {
    return (
      !node ||
      (min < node.data &&
        node.data < max &&
        validate(node.left, min, node.data) &&
        validate(node.right, node.data, max))
    );
  };

  return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
