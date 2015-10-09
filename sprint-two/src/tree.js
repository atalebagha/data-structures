var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// Time Complexity:  O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

//Time Complexity: O(n)
treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    result = true;
  } else {
    result = _.reduce(this.children, function(results, value) {
      return results || value.contains(target);
    }, result);
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
