var CQueue = function() {
  this.A_stack = [];
  this.B_stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.A_stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if(this.B_stack.length>0) {
    return this.B_stack.pop();
  }
  while(this.A_stack.length>0) {
    this.B_stack.push(this.A_stack.pop())
  }
  if(this.B_stack.length===0) {
    return -1
  }
  return this.B_stack.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */