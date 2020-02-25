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
            orig = orig.next;
        }
        orig.next = 
        
        
        return newSLL;
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
newSLL = new SLL();
firstSLL.secondLast();
y = firstSLL.removeSelf("Bill");
firstSLL.view();
x = firstSLL.copy();
console.log("*");
console.log(x);
console.log("*");
console.log(y);


