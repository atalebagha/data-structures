var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);
  if(!currentBucket) {
    this._storage.set(i, [] );
    currentBucket = this._storage.get(i)
  }

  var result = _.reduce(currentBucket, function(memo, val) {
    if (val[0] === k) {
      val[1] = v;
      return true;
    }
    return memo;
  }, false);
  if (!result) {
    currentBucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);
  return _.reduce(currentBucket, function(memo, val) {
    if (!memo && val[0] === k) {
      return val[1];
    }
    return memo;
  }, null);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(i);
  _.each(currentBucket, function(value, index) {
    if (value[0] === k) {
      currentBucket.splice(index, 1);
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
