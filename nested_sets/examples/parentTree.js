var parentTree = [
    { id: 1, parent: 0 },
    { id: 2, parent: 1 },
    { id: 3, parent: 1 },
    { id: 4, parent: 1 },
    { id: 5, parent: 2 },
    { id: 6, parent: 2 },
    { id: 7, parent: 2 },
    { id: 8, parent: 3 }
];

var nestedTree = [
    { id: 1, left: null, right: null, parent: 0 },
    { id: 2, left: null, right: null, parent: 1 },
    { id: 3, left: null, right: null, parent: 1 },
    { id: 4, left: null, right: null, parent: 1 },
    { id: 5, left: null, right: null, parent: 2 },
    { id: 6, left: null, right: null, parent: 2 },
    { id: 7, left: null, right: null, parent: 2 },
    { id: 8, left: null, right: null, parent: 3 }
];

var parentTreeForTwoNodes = [
  { id: 1, parent: 0 },
  { id: 2, parent: 1 },
  { id: 3, parent: 1 },
  { id: 4, parent: 2 },
  { id: 5, parent: 2 },
  { id: 6, parent: 3 },
  { id: 7, parent: 3 }
];

var nestedTreeForTwoNodes = [
  { id: 1, left: 1, right: 14 },
  { id: 2, left: 2, right: 7 },
  { id: 3, left: 8, right: 13 },
  { id: 4, left: 3, right: 4 },
  { id: 5, left: 5, right: 6 },
  { id: 6, left: 9, right: 10 },
  { id: 7, left: 11, right: 12 }
];

var nestedTreeBeforeRemoving = [
    { id: 1, left: 1, right: 14 },
    { id: 2, left: 2, right: 7 },
    { id: 3, left: 8, right: 13 },
    { id: 4, left: 3, right: 4 },
    { id: 5, left: 5, right: 6 },
    { id: 6, left: 9, right: 10 },
    { id: 7, left: 11, right: 12 }
];

var nestedTreeAfterRemoving = [
    { id: 1, left: 1, right: 12 },
    { id: 2, left: 2, right: 7 },
    { id: 3, left: 8, right: 11 },
    { id: 4, left: 3, right: 4 },
    { id: 5, left: 5, right: 6 },
    { id: 6, left: 9, right: 10 },
  ];

var beforeRemoveElementWithOneChild = [
    { id: 1, left: 1, right: 16 },
    { id: 2, left: 2, right: 9 },
    { id: 3, left: 10, right: 15 },
    { id: 4, left: 3, right: 6 },
    { id: 5, left: 7, right: 8 },
    { id: 6, left: 11, right: 12 },
    { id: 7, left: 13, right: 14 },
    { id: 8, left: 4, right: 5 }
];

var afterRemoveElementWithOneChild = [
    { id: 1, left: 1, right: 14 },
    { id: 2, left: 2, right: 7 },
    { id: 3, left: 8, right: 13 },
    { id: 5, left: 5, right: 6 },
    { id: 6, left: 9, right: 10 },
    { id: 7, left: 11, right: 12 },
    { id: 8, left: 3, right: 4 }
  ];

var beforeRemoveElementWithTwoChildren = [
    { id: 1, left: 1, right: 12 },
    { id: 2, left: 2, right: 7 },
    { id: 3, left: 8, right: 11 },
    { id: 4, left: 3, right: 4 },
    { id: 5, left: 5, right: 6 },
    { id: 6, left: 9, right: 10 }
];

var afterRemoveElementWithTwoChildren = [
    { id: 1, left: 1, right: 10 },
    { id: 3, left: 6, right: 9 },
    { id: 4, left: 2, right: 5 },
    { id: 5, left: 3, right: 4 },
    { id: 6, left: 7, right: 8 }
  ];

var arrayBeforeResort = [
  { id: 1, left: 1, right: 12 },
  { id: 2, left: 2, right: 7 },
  { id: 3, left: 8, right: 11 },
  { id: 4, left: 3, right: 4 },
  { id: 6, left: 9, right: 10 },
];

var arrayAfterResort = [
  { id: 1, left: 1, right: 10 },
  { id: 2, left: 2, right: 5 },
  { id: 3, left: 6, right: 9 },
  { id: 4, left: 3, right: 4 },
  { id: 6, left: 7, right: 8 },
];

var nestedTreeBeforeAdding = [
  { id: 1, left: 1, right: 14 },
  { id: 2, left: 2, right: 7 },
  { id: 3, left: 8, right: 13 },
  { id: 4, left: 3, right: 4 },
  { id: 5, left: 5, right: 6 },
  { id: 6, left: 9, right: 10 },
  { id: 7, left: 11, right: 12 }
];

var nestedTreeAfterAdding = [
  { id: 1, left: 1, right: 16 },
  { id: 2, left: 2, right: 9 },
  { id: 3, left: 10, right: 15 },
  { id: 4, left: 3, right: 6 },
  { id: 5, left: 7, right: 8 },
  { id: 6, left: 11, right: 12 },
  { id: 7, left: 13, right: 14 },
  { id: 8, left: 4, right: 5 }
];
