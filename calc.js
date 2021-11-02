var first_num = "";
var operation = "";
var second_num = "";
var answer;

//if get name of button click = 1 and operation = "" then first num =+ 1 (do for all numbers)
//if get name of button click = +|-|*|/| then operation = +|-|*|/|
//if get name of button click = 1 and operation = +|-|*|/| then second num += 1 (do for all numbers)

function display0(){
    if (operation == ""){
        first_num += "0";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "0";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display1(){
    if (operation == ""){
        first_num += "1";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "1";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display2(){
    if (operation == ""){
        first_num += "2";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "2";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display3(){
    if (operation == ""){
        first_num += "3";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "3";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display4(){
    if (operation == ""){
        first_num += "4";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "4";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display5(){
    if (operation == ""){
        first_num += "5";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "5";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display6(){
    if (operation == ""){
        first_num += "6";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "6";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display7(){
    if (operation == ""){
        first_num += "7";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "7";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display8(){
    if (operation == ""){
        first_num += "8";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "8";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function display9(){
    if (operation == ""){
        first_num += "9";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += "9";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function point(){
    if (operation == ""){
        first_num += ".";
        //alert(first_num);
        document.getElementById("first_num").innerHTML = first_num;
    }
    else{
        second_num += ".";
        document.getElementById("second_num").innerHTML = second_num;
    }
}

function plus(){
    operation = "+";
    document.getElementById("operation").innerHTML = operation;
}


function minus(){
    operation = "-";
    document.getElementById("operation").innerHTML = operation;
    }

function multiply(){
    operation = "*";
    document.getElementById("operation").innerHTML = operation;
}

function divide(){
    operation = "/";
    document.getElementById("operation").innerHTML = operation;
}

function result(){
    var first = parseInt(first_num);
    var second = parseInt(second_num);
    if (operation == "+"){
        answer = first + second;
        document.getElementById("answer").innerHTML = " = " + answer;
    }
    else if (operation == "-"){
        answer = first - second;
        document.getElementById("answer").innerHTML = " = " + answer;
    }
    else if (operation == "*"){
        answer = first * second;
        document.getElementById("answer").innerHTML = " = " + answer;
    }
    //if (operation == "/"){
    else{
        answer = first / second;
        document.getElementById("answer").innerHTML = " = " + answer;
    }
    //if operation = +, then first num + second num (do for all)
    //put answer in div box
}

//store 2 numbers, get operation, solve

/*function display(){
    //first_num = document.getElementsByName();
    //get number of button
    //display it in box
    // console.log("Hello world");
if (document.getElementById("1")){
    alert("Hello world");
}*/

/*else if (document.getElementById("2")){
    alert("Hello world2");
}*/
//     // first_num += 0;
//     document.getElementById("first").innerHTML = 0;

//}


/*document.getElementById('2').onclick = function(){
    alert("button 2");
}*/

//function display(){
    //.click() simulates a mouse click
    // if (document.getElementById('1').clicked == true){
    //     alert("button 1 was clicked");

        // document.getElementById('1').onclick = function() {
        //     alert("button 1 was clicked");
        //  }

        //  document.getElementById('1').addEventListener("click", function() {
        //     alert("You clicked me");
        //  }
    //}

    //if get name of button click = 1 and operation = "" then first num =+ 1 (do for all numbers)
    //if get name of button click = +|-|*|/| then operation = +|-|*|/|
    //if get name of button click = 1 and operation = +|-|*|/| then second num += 1 (do for all numbers)

//}




