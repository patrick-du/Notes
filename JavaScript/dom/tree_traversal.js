// Potential scenarios:
// - Given tree and element, return the node in the tree
// - Given a tree and a node, return the nodes path in the form of indexes
// - Given two identically structured trees and a node in the first tree, locate the node in the second tree
// - Given a path and elements for each path, build the tree

// Q1: Given a tree and element, find the given element in the tree - otherwise, return null

let tree = document.body;
let el = "node5";

const searchTree1 = (tree, el) => {
  // Use a stack to keep track of our position in the tree
  // Iterate through the stack and check
  // - If the currentNode = el, return currentNode
  // - If the currentNode != el, check for it's children
  //    - If children, we push these children onto the stack
  //    - If no children, move on - nothing left to check at that current node
  let stack = [tree];

  while (stack.length > 0) {
    let node = stack.pop();
    if (node.title == el) {
      return node;
    } else if (node.children && node.children.length > 0) {
      for (let iterator = 0; iterator < node.children.length; iterator++) {
        stack.push(node.children[iterator]);
      }
    }
  }
  return null;
};

// Q2: Given two trees with identical structure and a
//     specified node within the first tree, locate the
//     node in the second tree with the same position
//     within the structure

// Assumptions:
// - Using the position of a node, find the path to the
//   root node by creating an array of childNode indexes

// - To access child nodes, can I assume that we are only
//   looking at HTML elements - this would indicate the use of
//   children rather than childNodes

// Step 1: Given a tree and a node, get nodes path in the form
// of indexes
const getPath = (nodeTree, targetNode) => {
  let current = targetNode;
  let path = [];

  while (targetNode !== nodeTree) {
    // traverse upwards by looking at nodes - parents-childrens
    path.unshift(
      nodeTree.parentNode.childNodes.findIndex((node) => node == current)
    );
    current = current.parentNode;
  }

  return path;
};

// Step 2: Given a tree and a path, locate the node
const locateNodeFromPath = (nodeTree, path) => {
  let current = nodeTree;

  for (let pathIterator = 0; pathIterator < path.length; pathIterator++) {
    let pathIndex = path[pathIterator];
    current = current.childNodes[pathIndex];
    // childNodes
    // children
  }

  return current;
};

// Step 3: Function to call this
const findNodeInDuplicateTree = (tree, node) => {
  let path = getPath(tree, node);
  return locateNodeFromPath(tree, path);
};

const getPathFromTree = (tree, node) => {
  let path = [];
  let currentNode = node;
};
