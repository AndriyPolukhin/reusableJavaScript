<?php


# FUNCTION _ block of code that you can repeatadly call

/*

    Camel Case  - myFunction();
    Lower Case = my_function();
    Pascal Code = MyFunction();

*/


/*
echo 'Hello there';
 echo '<br>';

 // Just a simple function
function simpleFunction() {
    echo 'Hello world';
    echo '<br>';
}

simpleFunction();
*/

// Function with parameters
/*
function sayHello($name = 'World')
{
    echo "Hello $name<br>";
}

sayhello('Andriy');
sayHello('Anastasia');
sayHello();
*/
// Call back fucntion
function addNumbers($num1, $num2)
{
    return $num1 + $num2;
}

//echo addNumbers(2,3);

// BY REFERENCE

$myNum = 10;

function addFive($num)
{
    $num += 5;
}

function addTen(&$num)
{
    $num += 10;
}

addFive($myNum);
echo "Value: $myNum<br>";
addTen($myNum);
echo "Value: $myNum<br>";








?>