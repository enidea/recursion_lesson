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

function levelOrderTraversal(
  root: BinaryTree<number> | null,
): (number | null)[] {
  const result: (number | null)[] = [];
  let currentLine = [root];

  while (currentLine.length > 0) {
    const nextLine: (BinaryTree<number> | null)[] = [];

    for (const node of currentLine) {
      if (node) {
        result.push(node.data);
        nextLine.push(node.left, node.right);
      } else {
        result.push(null);
      }
    }

    currentLine = nextLine;
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
