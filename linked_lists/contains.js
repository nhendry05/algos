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
    contain(val){
        var name = this.head;
        var count = 0;
        while(name){
            if (name.value == val){
                return console.log("Name was found");
            }
            else{
                name = name.next;
                count += 1;
            }
        }
        return console.log("Name was not found")
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
firstSLL.contain("Tad");
