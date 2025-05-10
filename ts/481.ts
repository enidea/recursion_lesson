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

  let nodeToBePorted: BinaryTree<number> | null = null;

  if (!(current.left || current.right)) {
    nodeToBePorted = null;
  } else if (current.left && current.right) {
    const { successorParent, successor } = successorWithSuccessorParent(
      current,
      current.data,
    );

    if (!successor) {
      throw new Error('Invalid inputs');
    }

    if (current.right.data === successor.data) {
      successor.left = current.left;
      nodeToBePorted = successor;
    } else {
      if (!successorParent) {
        throw new Error('Invalid inputs');
      }

      successorParent.left = successor.right;
      successor.left = current.left;
      successor.right = current.right;
      nodeToBePorted = successor;
    }
  } else {
    nodeToBePorted = current[current.left ? 'left' : 'right'];
  }

  if (parent === null) {
    return nodeToBePorted;
  }

  parent[parent.left?.data === current.data ? 'left' : 'right'] =
    nodeToBePorted;

  return root;
}

function successorWithSuccessorParent(
  root: BinaryTree<number> | null,
  key: number,
): {
  successorParent: BinaryTree<number> | null;
  successor: BinaryTree<number> | null;
} {
  let parent: BinaryTree<number> | null = null;
  let current = root;
  let successorParent: BinaryTree<number> | null = null;
  let successor: BinaryTree<number> | null = null;

  while (current) {
    if (current.data === key) {
      if (current.right) {
        successorParent = parent;
        successor = current.right;

        while (successor?.left) {
          successorParent = successor;
          successor = successor.left;
        }
      }

      break;
    }

    if (current.data > key) {
      successorParent = parent;
      parent = successor = current;
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return {
    successorParent,
    successor,
  };
}
