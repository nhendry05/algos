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
    addBack(value){
        var runner = this.head;
        var count = 0;
        while(runner.next){
            runner = runner.next;
            count += 1;
        }
        runner.next = new Node(value);
        return runner;
    }
    removeBack(){
        var runner = this.head;
        var count = 0;
        while(runner.next.next){
            runner = runner.next;
            count += 1;

        }
        runner.next = null;
        return this;
    }
    back(){
        var runner = this.head;
        var count = 0;
        while(runner.next){
            runner = runner.next;
            count += 1;

        }
        return console.log("This is the last value: " + runner.value);
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
firstSLL.back();
firstSLL.removeBack();
firstSLL.addBack("Nicole");
