var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);

  queue.highIndex = 0;
  queue.lowIndex = 0;
  queue.storage = {};

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.highIndex] = value;
  this.highIndex++;
}

queueMethods.dequeue = function() {
  if (this.highIndex-this.lowIndex) {
    this.lowIndex++;
    return this.storage[this.lowIndex - 1];
  }
}

queueMethods.size = function() {
  return this.highIndex - this.lowIndex;
}

