var expect = chai.expect;

describe('nestedTree', function() {
  describe('binaty to nestedTree', function() {
    it('Convert function return value', function() {
      expect(convertFromTreeToNestedTree(parentTree)).to.exist;
    });

    it('find element in parent array', function() {
      expect(findElementWithParent(parentTree, 0)).to.eql(0);
    });

    it('generate nested element', function() {
      expect(generateNestedTree(parentTree)).to.eql(nestedTree);
    });

    it('for empty tree array I get empty result', function() {
      expect(convertFromTreeToNestedTree([])).to.eql([]);
    });

    it('return correct result for one node', function() {
        expect(convertFromTreeToNestedTree([
          { id: 1, parent: 0 }
        ])).to.eql([
          { id: 1, left: 1, right: 2 }
        ]);
    });

    it('return correct result for two node', function() {
        expect(convertFromTreeToNestedTree(parentTreeForTwoNodes)).to.eql(nestedTreeForTwoNodes);
    });
  });

  describe('delete', function() {
    it('function return empty array for empty tree', function() {
      expect(deleteFromBinaryTree([], 1)).to.exist;
    });

    it('throw error for missing tree', function() {
      expect(function () { deleteFromBinaryTree(null, 0) }).to.throw('Missing tree');
    });

    it('throw error for missing element', function() {
      expect(function () { deleteFromBinaryTree([], null) }).to.throw('Missing index');
    });

    it('remove element which does not have a child', function() {
      expect(deleteFromBinaryTree(nestedTreeBeforeRemoving, 7)).to.eql(nestedTreeAfterRemoving);
    });

    it('remove element which has a child', function () {
      expect(deleteFromBinaryTree(beforeRemoveElementWithOneChild, 4)).to.eql(afterRemoveElementWithOneChild);
    });

    it('remove element which has two children', function () {
      expect(deleteFromBinaryTree(beforeRemoveElementWithTwoChildren, 2)).to.eql(afterRemoveElementWithTwoChildren);
    });

    it('resort new array', function() {
       expect(reSort(arrayBeforeResort, 7, 5)).to.eql(arrayAfterResort);
    });
  });

  describe('add to tree', function () {
    it('throw error for missing element', function() {
      expect(function () { addElement([], null) }).to.throw('Missing element');
    });

    it('throw error for missing tree', function() {
      expect(function () { addElement(null, { id: 12 }) }).to.throw('Missing tree');
    });

    it('add to element', function() {
      expect(addElement(nestedTreeBeforeAdding, { id: 8 })).to.eql(nestedTreeAfterAdding);
    });
  });
});
