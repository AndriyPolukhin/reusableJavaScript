<?php
# LOOPS -EXECUTE CODE SET NUMBES OF TIMES


/*

for
while
do..while 
foreach


*/

# Foor loop
# @params - init, condition, inc


for( $i = 0; $i < 3; $i++)
{
    echo 'Number is ' . $i;
    echo '<br>';
}


# While Loop
# @params - condition

$i = 0;
while($i < 3)
{
echo $i;
echo '<br>';
$i++;
}

# Do ... While
# @params - condition

$i = 0;

do {
    echo "Number is : " . $i;
    echo '<br>';
    $i++;
}
while($i < 5);



# Foreach
# @params - work with arrays

$people = array('Andriy', 'Olga','Anastasia');

foreach($people as $person)
{
    echo $person;
    echo '<br>';
}


$pupls = array(
    'Andriy' => 'andriy@gmail.com', 
    'Anastasia' => 'anastasia@gmail.com', 
    'Olga' => 'olga@gmail.com');

foreach($pupls as $pupl => $email)
{
    echo $pupl.': '.$email;
    echo '<br>';
}





?>