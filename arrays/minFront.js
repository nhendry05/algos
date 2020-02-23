function minIndex(arr, index){
    min = arr[index];
    for (x=index; x<arr.length; x++){
        if(arr[x] <= min){
            min = arr[x];
            newIndex = x;
        }
    }
    return newIndex;
}

function shiftBack(arr, minIndex, shift){
    for(j=minIndex; j>shift; j--){
        var swap1 = arr[j];
        var swap2 = arr[j-1];
        arr[j] = swap2;
        arr[j-1] = swap1;
    }
    return arr;
}

function minFront(arr){
    var min;
    var a = 0;
    for (i = 0; i < arr.length; i++){
        min = minIndex(arr,i);
        arr = shiftBack(arr, min, a);
        a = a + 1;
    }
    return arr;
}
arr = [4, 2, 1, 3, 5];
y = minFront(arr);
console.log(y);