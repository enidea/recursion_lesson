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

function bstInsert(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  const newNode = new BinaryTree(key);

  if (!root) {
    return newNode;
  }

  let current: BinaryTree<number> | null = root;

  while (true) {
    if (current.data === key) {
      return root;
    }

    if (current.data > key) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = newNode;
        break;
      }
    } else if (current.right) {
      current = current.right;
    } else {
      current.right = newNode;
      break;
    }
  }

  return root;
}
