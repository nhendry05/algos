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
    max(){
        var test = this.head;
        var count = 0;
        var max = 0;
        while(test){
            if (max<test.val){
                max = test.val;
            }
            count += 1;
            test = test.next;
        }
        return max;
    }
    min(){
        var test = this.head;
        var count = 0;
        var min = this.head.val;
        while(test){
            if(min>test.val){
                min = test.val;
            }
            count += 1;
            test = test.next;
        }
        return min;
    }
    avg(){
        var test = this.head;
        var count = 0;
        var total = 0;
        var avg;
        while(test){
            total = total + test.val;
            count += 1;
            test = test.next;
        }
        avg = total/count;
        return avg;
    }
}

firstNode = new ListNode(10);
secondNode = new ListNode(4);
thirdNode = new ListNode(2);
fourthNode = new ListNode (15);
fifthNode = new ListNode(8);

firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fifthNode;

firstSLL = new SLL(firstNode);
maxVal = firstSLL.max();
console.log("Max value is: " + maxVal);
minVal = firstSLL.min();
console.log("Min value is: " + minVal);
avgVal = firstSLL.avg();
console.log("Average value is: " + avgVal);