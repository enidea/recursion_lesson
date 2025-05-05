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

function preorderTraversal(root: BinaryTree<number> | null): number[] {
  if (!root) {
    return [];
  }

  return [
    root.data,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ];
}
