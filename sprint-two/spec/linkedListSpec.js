describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
  it('should be able to add to head', function(){
    linkedList.addToHead(7);
    expect(linkedList.head.value).to.equal(7);
    linkedList.addToHead(8);
    expect(linkedList.head.value).to.equal(8);
    linkedList.addToHead(9);
    expect(linkedList.head.value).to.equal(9);
    expect(linkedList.contains(7)).to.equal(true);
    expect(linkedList.contains(8)).to.equal(true);
  });

  it('should remove from the tail', function() {
    linkedList.addToTail(7);
    linkedList.addToTail(14);
    linkedList.addToTail(2);
    linkedList.addToTail(5);
    linkedList.removeTail();
    expect(linkedList.contains(5)).to.equal(false);
    expect(linkedList.tail.value).to.equal(2);
    linkedList.removeTail();
    expect(linkedList.contains(2)).to.equal(false);
    expect(linkedList.tail.value).to.equal(14);
  })
});
