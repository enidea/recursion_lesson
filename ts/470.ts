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

function inorderTraversal(root: BinaryTree<number> | null): number[] {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.data,
        ...inorderTraversal(root.right),
      ]
    : [];
}
