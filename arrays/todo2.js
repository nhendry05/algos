//reverse
//arr = [3, 5, 7, 1, 4, 2, 1]
function reverse(arr){
    y = arr.length-1;
    for (x = 0; x < arr.length/2; x++){
        var swap = arr[x];
        arr[x] = arr[y];
        arr[y] = swap;
        y = y - 1;
    }
    return arr;
}
//reverse(arr);

//rotate
//arr = [1, 2, 3, 4, 5];
//shiftBy = 1;
function rotate(arr, shiftBy){
    add_index = arr.length;
        for (i=0; i < arr.length; i++){
            if(i !== shiftBy+1){
                arr[add_index] = arr[i];
                add_index = add_index + 1;
            }
            else{
                break;
            }
        }
        for(j = 0; j < shiftBy+1; j ++){
            arr.shift();
        }
    return arr;
}
//rotate(arr, shiftBy);

//filter range
function removeAt(arr, index){
    for(i = index; i<arr.length-1; i++){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr.pop();
    return arr;
}

function filterRange(arr, min, max){
    for(index=0; index<arr.length; index++){
        if(arr[index]<min || arr[index]>max){
            removeAt(arr,index);
        }
    }
    return arr;
}
//arr = [1,5,2,7,9.1]
//filterRange(arr,4,8);

//concat
//arr1 = [1,2,3];
//arr2 = [4,5,6];
function concat(arr1,arr2){
    newarr = [];
    for(i = 0; i<arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for(index = 0; index<arr2.length; index++){
        newarr.push(arr2[index]);
    }
    return newarr;
}
//concat(arr1,arr2);

//skyline
function skyline(arr){
    max = 0;
    for(count=0; count<arr.length; count++){
        if(arr[count]<=0){
            removeAt(arr,count);
        }
        else if(max>arr[count]){
            max = arr[count];
        }
        else{
            removeAt(arr,count);
        }
    }
    return arr;
}
//arr = [-1,1,1,7,3];
//skyline(arr);

