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

function bstDelete(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  if (!root) {
    return null;
  }

  let parent: BinaryTree<number> | null = null;
  let current: BinaryTree<number> | null = root;

  while (current && current.data !== key) {
    parent = current;
    current = current.data > key ? current.left : current.right;
  }

  if (!current) {
    return root;
  }

  const toDelete = current;

  let nodeToBePorted: BinaryTree<number> | null = null;

  if (toDelete.left && toDelete.right) {
    const { successorParent, successor } =
      successorWithSuccessorParent(toDelete);

    if (!successor) {
      throw new Error('Invalid inputs');
    }

    if (toDelete.right.data === successor.data) {
      successor.left = toDelete.left;
      nodeToBePorted = successor;
    } else {
      if (!successorParent) {
        throw new Error('Invalid inputs');
      }

      successorParent.left = successor.right;
      successor.left = toDelete.left;
      successor.right = toDelete.right;
      nodeToBePorted = successor;
    }
  } else {
    nodeToBePorted = toDelete[toDelete.left ? 'left' : 'right'];
  }

  if (!parent) {
    return nodeToBePorted;
  }

  parent[parent.left?.data === toDelete.data ? 'left' : 'right'] =
    nodeToBePorted;

  return root;
}

function successorWithSuccessorParent(current: BinaryTree<number> | null): {
  successorParent: BinaryTree<number> | null;
  successor: BinaryTree<number> | null;
} {
  let successorParent: BinaryTree<number> | null = null;
  let successor: BinaryTree<number> | null = null;

  if (current?.right) {
    successor = current.right;

    while (successor?.left) {
      successorParent = successor;
      successor = successor.left;
    }
  }

  return {
    successorParent,
    successor,
  };
}
