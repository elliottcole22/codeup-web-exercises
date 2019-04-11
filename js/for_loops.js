"use strict";
/**Problem 2**/
/**function ShowMultiplicationTable(i)*/

    for (var i = 1; i <= 10; i++) {
        console.log("Show table " + i);

    }


    /**Justin's solution*/

    function outputRow(num1, num2) {
    var output = "";
    var total = num1 * num2;
    output += num1 + " x " + num2 + " = " + total;
    return output;

    function showMultiplicationTable(num) {
        var output = "";
        for (var i = 1, i >=10, i++) {
            output += outputRow(num, i) + "\n";
        }
    }

    //function to generate random number
    //main function to iterate 10 times
    //function to console.log if number is even or odd
    //
/**Problem 3*/

function returnRandomNum(min, max) {
        return Math.floor(Math.random()
        (max - min + 1) + min);
}

function isEvenOdd(num) {
    var outputMessage = num;
    outputMessage = (num % 2 === 0) ? " is even" : " is odd";
    console.log(outputMessage);
    }
    }
function evenOddCalulator() {
        for (var i = 1; i <=10, i+= 1) {
         var randNum = returnRandNum(20, 200);
         var result = isEvenOdd(randNum);
        }
        return result;
}

/**Problem 4*/

for (var i = 1; i < 10; i += 1) {
    console.log(String(i).repeat(i));
}

/**Problem 5*/

for (var i = 100; i >= 5, i -= 5) {
    console.log(i);
}