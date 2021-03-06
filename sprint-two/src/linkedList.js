var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  //Time Complexity: O(1)
  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  // Time Complexity:  O(1)
  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  //Time Complexity: O(n)
  list.contains = function(target){
    for (var current = list.head; current !== null; current = current.next) {
      if (current.value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
