var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    if (count) {
      var dequeued = storage[0];

      for (var i = 0; i < count; i++) {
        storage[i] = storage[i+1];
      }
      count--;
      return dequeued;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
