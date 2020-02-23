//setting and swapping
var swap;
var myNumber = 42;
var myName = "Nicole";
swap = myNumber;
myNumber = myName;
myName = swap;

//print -52 to 1066
for (i = -52; i <= 1066; i++){
    console.log(i);
}

//dont worry, be happy
function beCheerful(){
    console.log("good morning!")
}
for (i=0; i<98; i++){
    beCheerful();
}

//multiples of three - but not all
for(i = -300; i <= 0; i++){
    if (i % 3 == 0){
        if(i == -3){
            break;
        }
        else if(i == -6){
            break;
        }
        else{
            console.log(i);
        }
    }
}

//print integers with while
x = 2000
while(x<=5280){
    console.log(x);
    x++;
}

//you say it's your birthday
num1 = 1;
num2 = 19;
if (num1 == 1 && num2 == 19){
    console.log("How did you know?");
}
else if(num2 == 1 && num1 == 19){
        console.log("How did you know?");
}
else{
    console.log("Just another day...")
}

//leap year
year = 2020;
function leapYear(year){
    if (year % 400 == 0){
        console.log("It's a leap year!");
    }
    else if(year % 100 == 0){
        console.log("Not a leap year");
    }
    else if(year % 4 == 0){
        console.log("It's a leap year!");
    }
    else{
        console.log("Not a leap year")
    }
}
leapYear(year);

//print and count
function printCount(start, end){
    var x = 0;
    for(i=start; i<=end; i++){
        if(i % 5 == 0){
            console.log(i);
            x++;
        }
    }
    console.log("How many times: " + x);
}
printCount(512, 4096)

//multiples of six
mult = 0;
while(mult<=60000){
    if(mult%6 == 0){
        console.log(mult);
    }
    mult++;
}

//counting, the dojo way
for(i=1; i<=100; i++){
    if(i%5 == 0){
        console.log("Coding");
        if(i%10 == 0){
            console.log("Dojo");
        }
    }
    else{
        console.log(i);
    }
}

//what do you know?
incoming = "Hello";
function whatDoYouMean(incoming){
    console.log(incoming);
}
whatDoYouMean(incoming);

//Whoa, That suckers huge...
var sum = 0;
for(i=-300000; i<=300000; i++){
    if(i%2 != 0){
        sum = sum + i;
    }
}
console.log(sum);

//countdown by Fours
for(i=2016; i>0; i-=4){
    console.log(i);
}

//flexible countdown
function flexibleCount(lowNum, highNum, mult){
    for(i=highNum; i>=lowNum; i-=mult){
        console.log(i)
    }
}
flexibleCount(2,9,3);

//final countdown
function finalCountdown(param1, param2, param3, param4){
    i = param2;
    while(i<=param3){
        if ( i != param4){
            if(i%param1 == 0){
            console.log(i);
            }
        }
    i++;
    }
}
finalCountdown(3,5,17,9); 