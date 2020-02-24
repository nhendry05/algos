//remove blanks
var remStr = "Pl ayTha tF u nkyM usi c";
function removeBlanks(str){
    var arr = [];
    arr = str.split(" ");
    remove = arr.join("");
    return remove;
}
//removeBlanks(remStr);

//get digits
var allStr = "0s1a3y5w7h9a2t4?6!8?0";
function getDigits(str){
    digitStr = "";
    digitArr = [];
    for (i = 0; i < str.length; i++){
        checkNum = str[i];
        if(checkNum == 0 || checkNum == 1 || checkNum == 2 || checkNum == 3 || checkNum == 4 || checkNum == 5 || checkNum == 6 || checkNum == 7 || checkNum == 8 || checkNum == 9 ){
            digitArr.push(checkNum);
        }

    }
    digitStr = digitArr.join("");
    return digitStr;
}
//getDigits(allStr);

//acronyms
var satNight = "Live from New York, it's Saturday Night!";
var noFree = "there's no free lunch - gotta pay yer way";
function acronym(str){
    var arr = [];
    acroArr = str.split(" ");
    for(i = 0; i < acroArr.length; i++){
        splitWord = acroArr [i].split("");
        x = splitWord[0];
        arr.push(x);
    }
    acro = arr.join("");
    upAcro = acro.toUpperCase();
    return upAcro;
}
acronym(noFree);

//count non-spaces
var nonStr = "Honey pie, you are driving me crazy";
function nonSpace(str){
    var count = 0;
    for (i = 0 ; i < str.length; i++){
        if(str[i] != " "){
            count = count+1;
        }
    }
    return count;
}
nonSpace(nonStr);

//remove shorter strings
var strArr = ['Nicole', 'Max', "Audrey", "James"];
var value = 4;
function removeShort(strArr, val){
    var newStrArr = [];
    for(i=0; i<strArr.length; i++){
        strLength = strArr[i].length;
        if (strLength > value){
            newStrArr.push(strArr[i]);
        }
    }
    return newStrArr;
}
removeShort(strArr, value);
