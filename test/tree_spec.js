var expect = require('chai').expect,
  Tree = require('../lib/tree').Tree;

describe('Tree object tests', function(){
  var tree;

  beforeEach(function(){
    tree = new Tree(6, "red");
  });

  describe('constructor', function() {
    it('tree should be truthy', function(){
      expect(Tree).to.be.ok;
    });

    it('tree should have a height', function() {
      expect(tree.getHeight()).to.equal(6);
    });

    it('tree should have a color', function() {
      expect(tree.getColor()).to.have.property('red');
    });
  });
});
