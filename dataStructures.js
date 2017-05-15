function convertFromTreeToNestedTree(tree) {
  if (!tree.length) {
    return [];
  }
  /*
  If we have tree we need to generate nested tree
  then we need to find root element and call function which
  marks all elements
  */
  var nestedTree = generateNestedTree(tree);
  var rootElement = findElementWithParent(nestedTree, 0);

  return markElement(0, rootElement, nestedTree);
}

function deleteFromBinaryTree(tree, index) {
  checkExistElement(tree, 'Missing tree');
  checkExistElement(index, 'Missing index');

  if (!tree.length) {
    return [];
  }

  /*
  If we need to remove element without children remove this element
  and re-sort all elements

  If element has one child
    then remove this element and set on his position child element
    re-sort tree from this element

  If element has two children
    remove this element
    then re-sort tree from right element
  */

  var elementIndex = getIndex(tree, index);
  var removeElement = tree.splice(elementIndex, 1);
  var allChildrens = getChildrenInNestedTree(tree, removeElement[0]);

  if (isElementDoNotHaveChildren(removeElement[0].left, removeElement[0].right)) {
    return reSort(tree, removeElement[0].right + 1, removeElement[0].left);
  }

  if (isElementHasOneChild(tree, removeElement[0])) {
    allChildrens[0] = setOneChildCoord(removeElement[0], allChildrens[0]);
    return reSort(tree, removeElement[0].right + 1, allChildrens[0].right + 1);
  } else {
    allChildrens[0] = setLeftElementRemoveElementCoord(
      removeElement[0],
      allChildrens[0]
    );
    return reSort(tree, removeElement[0].left + 3, removeElement[0].left + 1);
  }
}

function setOneChildCoord(removeElement, child) {
  child.left = removeElement.left;
  child.right = removeElement.left + 1;
  return child;
}

function setLeftElementRemoveElementCoord(removeElement, child) {
  child.left = removeElement.left;
  child.right = removeElement.right;
  return child;
}

function addElement(tree, element) {
  checkExistElement(tree, 'Missing tree');
  checkExistElement(element, 'Missing element');

  var currentIndexOfElement = 1;
  var currentElement = findLeftElement(tree, currentIndexOfElement);

  /*
   If we want to add new element we need to find last element
   */
  while (currentElement) {
    currentElement = findLeftElement(tree, currentIndexOfElement);
    if (isElementDoNotHaveChildren(currentElement.left, currentElement.right)) {
      element.left = currentElement.left + 1;
      element.right = currentElement.left + 2;
      tree.push(element);
      return reSort(tree, currentElement.right, element.right + 1);
    }
    currentIndexOfElement = incremmentCommand(currentIndexOfElement);
  }
}

function markElement(currentId, elementId, tree) {
  var element = tree[elementId];

  /*
   If element's left field didn't mark
     mark left field
   If element has left but don't have right
     check that this element has children
       if this element has children - set new current element
       else mark right field
   If element has left and right field
     check that this element has parent
       set current element parent element
     else return all nested tree
  */

  if (!element.left) {
    currentId = incremmentCommand(currentId);
    element.left = currentId;
    return markElement(currentId, elementId, tree);
  } else if (element.left && !element.right) {
    var allChildren = getChildren(tree, element);

    if (allChildren.length) {
      var index = getIndex(tree, allChildren[0].id);
      return markElement(currentId, index, tree);
    } else {
      currentId = incremmentCommand(currentId);
      element.right = currentId;
      return markElement(currentId, elementId, tree);
    }
  } else if (element.left && element.right) {
    if (element.parent) {
      var newIndex = getIndex(tree, element.parent);
      return markElement(currentId, newIndex, tree);
    } else {
      return generateResultNestedTree(tree);
    }
  }
}

function reSort(tree, currentNumber, newIndex, visitedIndexes) {
  if (!visitedIndexes) {
    var visitedIndexes = { left: [], right: []};
  }
  var sortElement = getResortElement(tree, visitedIndexes, currentNumber);

  if (!sortElement) {
    return tree;
  }

  /*
    if left or right element's field equal to number which we re-mark now
      set left field, increment index and number and mark like changed
  */

  if (sortElement.left === currentNumber) {
    sortElement.left = newIndex;
    visitedIndexes.left.push(sortElement.id);
  } else if (sortElement.right === currentNumber) {
    sortElement.right = newIndex;
    visitedIndexes.right.push(sortElement.id);
  }

  newIndex = incremmentCommand(newIndex);
  currentNumber = incremmentCommand(currentNumber);
  return reSort(tree, currentNumber, newIndex, visitedIndexes);
}

function checkExistElement(element, message) {
  if (!element) {
    throw new ReferenceError(message);
  }
}

function findElementWithParent(tree, parent) {
    return tree.findIndex(function (element) {
        return element.parent === parent;
    });
}

function generateNestedTree(items) {
    return items.map(function (item) {
      return Object.assign(item, { left: null, right: null });
    });
}

function isElementDoNotHaveChildren(left, right) {
  return left + 1 === right;
}

function isElementHasOneChild(tree, element) {
  return getChildrenInNestedTree(tree, element).length === 1;
}

function getChildrenInNestedTree(tree, element) {
  return tree.filter(function (item) {
    return item.left === element.left + 1 || item.right === element.right - 1;
  });
}

function getResortElement(tree, visitedIndexes, currentNumber) {
  return tree.find(function (item) {
    return (item.left === currentNumber && visitedIndexes.left.indexOf(item.id) === -1)
     || (item.right === currentNumber && visitedIndexes.right.indexOf(item.id) === -1);
  });
}

function findLeftElement(tree, currentElem) {
  return tree.find(function (item) {
    return item.left === currentElem;
  });
}

function incremmentCommand(currentElem) {
  return currentElem + 1;
}

function getChildren(tree, element) {
  return tree.filter(function(elem) {
    return elem.id !== element.id && element.id === elem.parent && (!elem.left || !elem.right);
  });
}

function getIndex(tree, elementId) {
  return tree.findIndex(function (elem) {
    return elem.id === elementId;
  });
}

function findElement(tree, index) {
  return tree.find(function (elem) {
    return elem.id === index;
  });
}

function generateResultNestedTree(tree) {
  return tree.map(function(item) {
    return {
      id: item.id,
      left: item.left,
      right: item.right
    };
  });
}
