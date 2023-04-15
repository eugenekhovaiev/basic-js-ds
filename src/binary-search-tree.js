const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addTo(this.rootNode, data);

    function addTo(node, data) {
      if (!node) {
        const newNode = new Node(data);
        return newNode;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addTo(node.left, data);
      } else {
        node.right = addTo(node.right, data);
      }

      return node;
    }
  }
  

  has(data) {
    return searchIn(this.rootNode, data);
    
    function searchIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  find(data) {
    return searchIn(this.rootNode, data);
    
    function searchIn(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeAt(this.rootNode, data);

    function removeAt(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeAt(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeAt(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let maxFromLeft = node.left;
          
          while (maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          }

          node.data = maxFromLeft.data;
          node.left = removeAt(node.left, maxFromLeft.data);
          return node;
        }
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let minNode = this.rootNode;
          
    while (minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let maxNode = this.rootNode;
          
    while (maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};