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

  while (current) {
    if (current?.data === key) {
      let nodeToBePorted: BinaryTree<number> | null = null;

      if (!(current.left || current.right)) {
        nodeToBePorted = null;
      } else if (current.left && !current.right) {
        nodeToBePorted = current.left;
      } else if (!current.left && current.right) {
        nodeToBePorted = current.right;
      } else if (current.left && current.right) {
        const successorNode = successor(current, current.data);

        if (!successorNode) {
          throw new Error('Invalid inputs');
        }

        if (current.right.data === successorNode.data) {
          nodeToBePorted = successorNode;
        } else {
          const successorParentNode = predecessor(current, successorNode.data);

          if (!successorParentNode) {
            throw new Error('Invalid inputs');
          }

          successorParentNode.left = successorNode.right;
          successorNode.right = successorParentNode;
          nodeToBePorted = successorNode;
        }
      }

      if (parent === null) {
        return nodeToBePorted;
      }

      if (parent.left?.data === current.data) {
        parent.left = nodeToBePorted;
      } else {
        parent.right = nodeToBePorted;
      }
    }

    parent = current;
    current = current.data > key ? current.left : current.right;
  }

  return root;
}

function minimumNode(root: BinaryTree<number>): BinaryTree<number> {
  let currentNode = root;

  while (currentNode?.left) {
    currentNode = currentNode.left;
  }

  return currentNode;
}

function successor(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  let current = root;
  let successor: BinaryTree<number> | null = null;

  while (current) {
    if (current.data === key) {
      if (current.right) {
        return minimumNode(current.right);
      }

      break;
    }

    if (current.data > key) {
      successor = current;
      current = current.left;
    } else {
      current = current.right;
    }
  }

  return successor;
}

function maximumNode(root: BinaryTree<number>): BinaryTree<number> {
  let currentRoot = root;

  while (currentRoot?.right) {
    currentRoot = currentRoot.right;
  }

  return currentRoot;
}

function predecessor(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  let current = root;
  let predecessor: BinaryTree<number> | null = null;

  while (current) {
    if (current.data === key) {
      if (current.left) {
        return maximumNode(current.left);
      }

      break;
    }

    if (current.data > key) {
      current = current.left;
    } else {
      predecessor = current;
      current = current.right;
    }
  }

  if (!current) {
    throw new Error('Invalid input.');
  }

  return predecessor;
}
