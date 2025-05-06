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
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current) {
      result.push(null);
      continue;
    }

    result.push(current.data);
    queue.push(current.left, current.right);
  }

  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
