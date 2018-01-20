<?php

# CONDITIONALS

/*

==
===
<
>
<=
>=
!=
!==


*/

$num = 6;

if($num == 5)
{
    echo '5 passed';
}
elseif ($num == 6)
{
    echo '6 passed';
}
else
{
    echo 'did not pass';
}

echo "<br>";

#NESTING IF


$num2 = 5;

if($num2 > 4)
{
    if($num2 < 10)
    {
        echo "$num2 passed";
        echo "<br>";
    }
}


/*

LOGICAL OPERATORS

and &&
or  ||
xor

*/

$num3 = 5;

if($num3 > 4 || $num3 < 10)
{
    echo "$num3 passed";
    echo "<br>";
}


# SWITCH

$favColor = 'red';

switch($favColor)
{
    case 'red':
        echo 'Your faavorite color is red';
        break;
    case 'blue':
        echo 'Your faavorite color is blue';
        break;
    case 'green':
        echo 'Your faavorite color is green';
        break;
    case 'yellow':
        echo 'Your faavorite color is yellow';
        break;
}



?>