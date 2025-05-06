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

const areArraysEqual = (
  a: readonly unknown[],
  b: readonly unknown[],
): boolean => {
  if (a.length !== b.length) {
    return false;
  }

  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      return false;
    }
  }

  return true;
};

function symmetricTree(root: BinaryTree<number> | null): boolean {
  type BinaryTreeList = (BinaryTree<number> | null)[];

  const getNodeDataList = (nodeList: BinaryTreeList): (number | null)[] => {
    return nodeList.map((node) => {
      return node ? node.data : null;
    });
  };

  const getChildrenNodeList = (nodeList: BinaryTreeList): BinaryTreeList => {
    const result: BinaryTreeList = [];

    for (const node of nodeList) {
      if (node) {
        result.push(node.left);
        result.push(node.right);
      }
    }

    return result;
  };

  if (!root) {
    return true;
  }

  let leftNodeList: BinaryTreeList = [root.left];
  let rightNodeList: BinaryTreeList = [root.right];

  while (leftNodeList.length > 0 && rightNodeList.length > 0) {
    if (
      !areArraysEqual(
        getNodeDataList(leftNodeList),
        getNodeDataList(rightNodeList).reverse(),
      )
    ) {
      return false;
    }

    leftNodeList = getChildrenNodeList(leftNodeList);
    rightNodeList = getChildrenNodeList(rightNodeList);
  }

  return true;
}
