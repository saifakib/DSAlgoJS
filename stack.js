
/**
 * Stack Structure LIFO
 */

/**
 * Stack Class
 * @param {Array} array
 * @param {Number} max
 */
class Stack {
    constructor(array, max) {
        this.array = array;
        this.max = max;
        this.top = this.array.length;
    }
     
    /**
     * Display the whole list
     * @return {Array}
     */
    display() {
        return this.array;
    }

    /**
     * Add a value to the list && Value add in the last position of list
     * @param {Number} value
     * @return {String}
     */
    push(value) {
        if(this.top === this.max) {
            return new Error('Stack Overflow');
        }
        this.array[this.top] = value;
        this.top++;
        return `${value} added in Stack`;
    }

    /**
     * Remove a value from the list && Value remove from the last position of list
     * @returns {String}
     */
    pop() {
        if(this.top === 0) {
            return new Error('Stack Underflow');
        }
         this.top--;
         //let removeValue = this.array[this.top];
         let removeValue = this.array.pop();
         return `${removeValue} is removed from Stack`
    }
}

const stack1 = new Stack([], 3);

console.log(stack1.display());
console.log(stack1.push(2));
console.log(stack1.push(3));
console.log(stack1.push(4));
console.log(stack1.push(5));
console.log(stack1.display());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.display());


/**
 * Function Based Stack Implementation
 * @link {https://github.com/saifakib/LeetCodePractice/blob/master/stack.js}
 */
