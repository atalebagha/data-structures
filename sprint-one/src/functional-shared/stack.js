var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0;
  stack.storage = {};

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
  if (this.count) {
    this.count--;
    return this.storage[this.count];
  }
}

stackMethods.size = function() {
  return this.count;
}
