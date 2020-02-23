var arr = [1, 5, 7, 9, 4];
var val = 2;
var index = 3;

//push front
function pushFront(arr, val){
    newarr = [val];
    for(i=0; i<arr.length; i++){
        newarr[i+1] = arr[i];
    }
    return newarr;
}
//pushFront(arr, val);

//pop front
function popFront(arr){
    newarr = [];
    y = arr[0];
    for (i=1; i<arr.length; i++){
        newarr[i-1] = arr[i];
    }
    arr = newarr;
    return y;
}
//popFront(arr);

//insert at
function insertAt(arr, index, val){
    for (i=0; i<arr.length; i++){
        if(i == index){
            arr[i] = val;
        }
    }
    return arr;
}
//insertAt(arr, index, val);

//remove at
function removeAt(arr, index){
    newarr = [];
    var j = 0;
    for (i=0; i<arr.length; i++){
        if(i == index){
            y = arr[i];
        }
        else{
            newarr[j] = arr[i]
            j = j+1;
        }
    }
    return newarr;
}
//removeAt(arr, index);

function swapPairs(arr){
    newarr = [];
    index = 1;
    for (i=0; i<arr.length; i += 2){
            j = index;
                if(j >= arr.length){
                    newarr[i] = arr[i];
                    break;
                }
            var swap = j;
            newarr[j] = arr[i];
            newarr[i] = arr[swap];
            index = index + 2;
    }
    return newarr;
}
//swapPairs(arr);
var sortarr = ["Audrey", "Audrey", "James", "Max", "Max", "Nicole" ];
function removeDuplicate(sortarr){
    var newarr = [];
    var j = 0;
    for(i = 0; i<sortarr.length; i++){
        if(sortarr[i] == sortarr[i+1]){
            console.log(sortarr[i]);
            newarr[j] = sortarr[i];
            i = i + 1;
            j = j + 1;
        }
        else {
            newarr[j] = sortarr[i];
            j = j + 1;
        }
    }
    return newarr;
}
//removeDuplicate(sortarr);




