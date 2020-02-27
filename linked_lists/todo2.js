class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(node){
        this.head = node;

    }
    view(){
        var name = this.head;
        var count = 0;
        while(name){
            console.log('Place: ' + count + ' Name: ' + name.value);
            name = name.next;
            count += 1;
        }
        return this;
    }
    secondLast(){
        var test = this.head;
        var count = 0;
        while(test.next.next){
            count += 1;
            test = test.next;
        }
        return test.value;
    }
    removeSelf(del){
        var count = 0;
        var prev;
        var newNext;
        var test = this.head;
        while(test.next){
            if(test.next.value == del){
                prev = test;
                newNext = test.next.next;
                prev.next = newNext;
            }
            count += 1;
            test = test.next;
        }
        return this;
    }
    copy(){
        var count = 0;
        var orig = this.head;
        newSLL.head = orig;
        while(orig.next){
            count += 1;
            newSLL.next = orig.next;
            orig = orig.next;
        }
        return newSLL;
    }
    filter(headNode, lowVal, highVal){
        var count = 0;
        while(headNode.next){
            if(headNode.value < lowVal || headNode.value > highVal ){
                this.removeSelf(headNode.value);
            }
            headNode = headNode.next;
            count += 1;
        }
        return this;
    }
}

firstNode = new Node("Sally");
secondNode = new Node("Bill");
thirdNode = new Node("Max");
fourthNode = new Node ("Tad");
fifthNode = new Node("Sam");

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;

fNode = new Node(10);
sNode = new Node(2);
tNode = new Node(15);
foNode = new Node (7);
fiNode = new Node(5);

fNode.next = sNode;
sNode.next = tNode;
tNode.next = foNode;
foNode.next = fiNode;

firstSLL = new SLL(firstNode);
numSLL = new SLL(fNode);
newSLL = new SLL();
firstSLL.secondLast();
firstSLL.removeSelf("Bill");
firstSLL.copy();
numSLL.filter(fNode, 6, 11);


