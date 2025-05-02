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

function bstSearch(
  root: BinaryTree<number> | null,
  key: number,
): BinaryTree<number> | null {
  let currentRoot = root;

  while (currentRoot && currentRoot.data !== key) {
    const nextRoot =
      currentRoot.data > key ? currentRoot.left : currentRoot.right;

    currentRoot = bstSearch(nextRoot, key);
  }

  return currentRoot;
}
