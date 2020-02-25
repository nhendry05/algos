class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(node){
        this.head = node;

    }
    display(){
        var val = this.head;
        var count = 0;
        while(val){
            console.log('Node: ' + count + ' Value: ' + val.value);
            val = val.next;
            count += 1;
        }
        return this;
    }
}

firstNode = new ListNode("Sally");
secondNode = new ListNode("Bill");
thirdNode = new ListNode("Max");
fourthNode = new ListNode ("Tad");
fifthNode = new ListNode("Sam");

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;

firstSLL = new SLL(firstNode);
firstSLL.display();
