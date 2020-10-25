class Node {

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class linkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }
// inserting element at last of linked list
    add(element) {
        var node = new Node(element);

        var current;

        if (this.head == null) 
            this.head = node;
        
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
// inserting the element at particular index
    insertAt(element, index) {
        if (index > 0 && index > this.size) {
            console.log('index greater than size');
            return false;
        }
        else {
            var node = new Node(element);
            var prev, curr;
            
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                var it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;

            }
            
        }
        this.size++;
            
    }
// deleting element at certain index
    deleteAt(index) {
        if (index > 0 && index > this.size) {
            console.log('false');
            return false;
        }
        else {
            var currt;
            if (index == 0) {
                currt = this.head;
                this.head = currt.next;
            }
            else {
                currt = this.head;
                var iti = 0;
                var del;
                while (iti < index-1) {
                    iti++;
                    currt = currt.next;
                    console.log(index, iti);
                }
                del = currt.next;
                if (del.next) {
                    console.log('del', del);
                    currt.next = del.next;
                }
                else {
                    console.log('currt',currt);
                    currt.next = null;
                }
            }
            this.size--;
        }
    }

// mid of linked list in a single traversal
    mid() {
        var slow, fast, cur, mid;
        cur = this.head;
        slow = cur;
        fast = cur;
        
        while (fast.next !== null & fast.next.next !== null) {     
            slow = slow.next;
            fast = fast.next.next;
           
        }
        mid = slow;
        console.log(mid);
    }
}   
var l1 = new linkedList();
l1.add(22);
l1.add(33);
l1.add(12);
l1.add(13);
l1.add(32);
l1.add(53);
console.log(l1);

// inserting the element 44 at index 1
l1.insertAt(44, 1);
console.log(l1);

l1.deleteAt(4);
console.log(l1);

l1.mid();




