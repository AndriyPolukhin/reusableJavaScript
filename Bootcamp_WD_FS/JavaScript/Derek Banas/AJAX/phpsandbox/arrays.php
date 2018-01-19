<?php
# Array - Variable with multiple values
/*
    - Index
    - Associative
    - Multi-dimensional

*/


// Indexed

$people = array('Misha', 'Olga', 'Andriy');
$ids = array(2000, 550000, 200000);
$cars = ['Honda', 'Toyota', 'Ford'];
$cars[3] = 'Chevy';
$cars[] = 'BMW';


// BUILD IN FUNCTION WITH ARRYAS
// print numbers
//echo count($cars);

// Print the whole array
//print_r($cars);

// Prints out the type and data
//var_dump($cars);

//echo $people[3];
//echo $cars[4];


// Associate arrays

$people = array('Brad' => 35, 'Jose' =>32, 'WIlliam' => 37);
$ids = [22 => 'Brad', 44 => 'Jose', 63 => 'William'];


//echo $people['Brad'];
//echo $ids[22];
$people['Jill'] = 42;
//echo $people['Jill'];

//print_r($people);
//var_dump($people);


// Multi-Dimensional
$cars = array(
    array('Honda', 20, 10),
    array('Toyota', 30, 20),
    array('FOrd', 23, 12)
);

echo $cars[1][2];

?>