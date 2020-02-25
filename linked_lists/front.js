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
    addFront(value){
        var temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
    }
    removeFront(){
        this.head = this.head.next;
        return this;
    }
    returnFront(){
        console.log("This person is at the front of the line: " + this.head.value);
        return this.head.value;

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

firstSLL = new SLL(firstNode);
firstSLL.view();
firstSLL.addFront("Rudy");
firstSLL.view();
firstSLL.removeFront();
firstSLL.view();
firstSLL.returnFront();