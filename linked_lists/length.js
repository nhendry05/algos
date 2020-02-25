class ListNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    constructor(node){
        this.head = node;
    }
    length(){
        var line = this.head;
        var count = 0;
        while(line){
            line = line.next;
            count += 1;
        }
        return count;
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
x = firstSLL.length();
console.log("Line count is: " + x);