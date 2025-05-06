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

// Iterative solution
function symmetricTree(root: BinaryTree<number> | null): boolean {
  if (!root) {
    return true;
  }

  const queue: (BinaryTree<number> | null)[] = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!(left || right)) {
      continue;
    }

    if (!(left && right) || left.data !== right.data) {
      return false;
    }

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
}

// Recursive solution
// function symmetricTree(root: BinaryTree<number> | null): boolean {
//   if (!root) {
//     return true;
//   }

//   const symmetricTreeHelper = (
//     left: BinaryTree<number> | null,
//     right: BinaryTree<number> | null,
//   ): boolean => {
//     if (!(left || right)) {
//       return true;
//     }

//     if (!(left && right) || left.data !== right.data) {
//       return false;
//     }

//     return (
//       symmetricTreeHelper(left.left, right.right) &&
//       symmetricTreeHelper(left.right, right.left)
//     );
//   };

//   return symmetricTreeHelper(root.left, root.right);
// }
