
/**
 * Node Class
 * @param {String|Number} data
 * @param {Node} prev
 * @param {Node} next
 */
class Node {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev || null;
        this.next = next || null;
    }
}

/**
 * Double LinkedList Class
 */
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Insert a node head of the lists
     * @param {String|Number|Boolean} data 
     */
    inserFrist(data) {
        if(this.head == null ) {
            this.head = new Node(data, '', this.head);
        } else {
            const previous = this.head;
            const newNode = new Node(data, '', this.head);
            this.head = newNode;
            previous.prev = newNode;
        }
        this.size++
    }

    /**
     * Insert a node specific index of a lists
     * @param {String|Number|Boolean} data
     * @param {Number} index
     */
    insertAt(data, index){
        if(index > 0 && index > this.size) return;

        if(index == 0) {
            this.inserFrist(data);
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        if(current == null) {
            previous.next = new Node(data, previous)
        } else {
            const newNode = new Node(data, previous, current);
            previous.next = newNode;
            current.prev = newNode;
        }
        this.size++;
        return;
    }

    /**
     * Remove a node specific index of a lists
     * @param {Number} index 
     */
    removeAt(index){
        if(index > 0 && index > this.size-1) return;

        if(index == 0) {
            const current = this.head;
            const nextNode = current.next;
            nextNode.prev = null;
            this.head = nextNode;
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        if(!current.next) {
            previous.next = null;
        } else {
            current = current.next;
            previous.next = current;
            current.prev = previous;
        }
        this.size--;
        return;
    }

    /**
     * Get a node from specfic index of a list
     * @param {Number} index 
     */
    getIndex(index) {
        if(index > 0 && index > this.size) return;

        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current);
                return;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    /**
     * Insert a node into at end of list
     * @param {String|Number|Boolean|any} data 
     */
    insertLast(data) {
        if(!this.head) {
            this.head = new Node(data);
        }
        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(data, current);
        }
        this.size++;
    }

    printData() {
        let current = this.head;
        console.log(`Size: ${this.size}`)
        while(current) {
            console.log(`${current.prev} - ${current.data} - ${current.next}`);
            current = current.next;
        }
    }
    clearList(){
        this.head = null;
        this.size = 0;
    }
}

const dll = new DoubleLinkedList();

dll.inserFrist(300);
dll.inserFrist(200);
dll.inserFrist(100);


// dll.clearList();

// dll.printData();

// dll.insertAt(101, 3);

// dll.getIndex(3)

dll.removeAt(4);

// dll.insertLast(500)

dll.printData();
