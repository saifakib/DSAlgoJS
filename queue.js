/**
 * Queue Structure FIFO
 */

/**
 * Queue Class
 */
class Queue {
    constructor(array) {
        this.array = array;
        this.rear = this.array.length;
        this.front = 0;
    }

    display() {
        return this.array;
    }

    isEmpty() {
        return this.rear == 0 ? false : true;
    }

    enQueue(value) {
        this.array[this.rear] = value;
        this.rear++;
        return `${value} added in Queue`
    }

    dQueue() {
        if(this.rear == this.front) return new Error("Queue have no value")
        let removeValue = this.array.shift();
        this.front++;
        return `${removeValue} removed from Queue`
    }
}

const obj = new Queue([]);

console.log(obj.isEmpty())
console.log(obj.enQueue(2))
console.log(obj.enQueue(3))
console.log(obj.enQueue(4))
console.log(obj.enQueue(5))
console.log(obj.enQueue(6))
console.log(obj.dQueue())
console.log(obj.isEmpty())
console.log(obj.display())


/**
 * Function Based Stack Implementation
 * @link {https://github.com/saifakib/LeetCodePractice/blob/master/queue.js}
 */
