var BinarySearchTree = function(value) {
  var obj = Object.create(binaryPrototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

var binaryPrototype = {};

// Time Complexity = O(log(n))
binaryPrototype.insert = function (value) {
  if(value > this.value) {
     if (!this.right) {
       this.right = new BinarySearchTree(value);
     } else {
       this.right.insert(value);
     }
  } else {
     if (!this.left) {
       this.left = new BinarySearchTree(value);
     } else {
       this.left.insert(value);
     }
  }
};

//Time Complexity = O(log(n))
binaryPrototype.contains = function(value){
  var result;
  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    return this.right ? this.right.contains(value) : false;
  } else {
    return this.left ? this.left.contains(value) : false;
  }
};

// Time Complexity = O(n);
binaryPrototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
