//TODO: queueMethods should not be global, but for some reason making it a member of Queue causes a test case to fail

var Queue = function(){

  var queue = {};
  queue.storage = {};
  queue.count = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

queueMethods.dequeue = function() {
  if (this.count) {
    var dequeued = this.storage[0];
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.count--;
    return dequeued;
  }
}

queueMethods.size = function() {
  return this.count;
}


