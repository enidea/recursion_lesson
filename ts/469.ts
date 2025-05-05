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
  const result: number[] = [];

  const traversal = (node: BinaryTree<number> | null) => {
    if (!node) {
      return;
    }

    result.push(node.data);
    traversal(node.left);
    traversal(node.right);
  };

  traversal(root);

  return result;
}
