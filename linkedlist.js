/**
 * Node Class
 * @param {String|Number|Boolean} data
 * @param {Node} next
 */
class Node{
    constructor(data, next=null) {
        this.data = data;
        this.next = next
    }
}

/**
 * LinkedList Class
 */
class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Inser a node head of the list
     * @param {String|Number} data 
     */
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    /**
     * Insert a node in list index
     * @param {String|Number} data 
     * @param {Number} index 
     * @returns 
     */
    inserAt(data, index) {
        if(index > 0 && index > this.size) {
            return;
        }
        if(index == 0) {
            this.head = new Node(data, this.head)
        }

        const node = new Node(data);
        let current, privious;
        current = this.head;
        let count = 0;
        
        while(count < index) {
            privious = current; // Node before index
            count++;
            current = privious.next;  // Node after index
        }
        node.next = current;
        privious.next = node;
    }

    /**
     * Remove a node from the list 
     * @param {Number} index 
     */
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let privious;
        let count = 0;

        if(index == 0) {
            this.head = current.next;
        }  else {
            while(count < index) {
                privious = current;
                current = privious.next;
                count++
            }
            privious.next = current.next;
        }
    }


    /**
     * Get a node from at index list
     * @param {Number} index 
     * @returns 
     */
    getIndex(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null ;

    }

    /**
     * Insert a node in the end of list
     * @param {String} data 
     */
    insertLast(data) {
        let node = new Node(data, null);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    /**
     * Print all nodes a list
     * @returns a node lists
     */
    printData() {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }

    /**
     * Clear the lists
     */
    clearList() {
        this.head = null;
        this.size = 0;
    }

}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.inserAt(201, 2);
ll.getIndex(2);
ll.removeAt(1);
ll.printData();

