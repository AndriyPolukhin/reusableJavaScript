<?php

# substr()
# Return a portion of a string

$output = substr('Hello', 1, 3);
echo $output;
echo "<br>";

# strlen()
# Returns the length of a string

$output = strlen('Hello World');
echo $output;
echo "<br>";

# strpos()
# Finds the postiion of the first occurence of a sub string

$output = strpos('Hello world', 'o');
echo $output;
echo "<br>";

# strrpos()
# Finds the position of the last occurence of a sub string

$output = strrpos('Hello World', 'o');
echo $output;
echo "<br>";

# trim()
# Strips whitespace

$text = 'Hello World                      ';
var_dump($text);
echo "<br>";
$trimmed = trim($text);
var_dump($trimmed);
echo "<br>";

# strtoupper()
# Makes everything uppercase

$output = strtoupper('Hello World');
echo $output;
echo "<br>";

# strtolower()
# Makers everythin lowercase

$output = strtolower('HELLO WORLD');
echo $output;
echo "<br>";

# ucwords()
# Capitalize just the first word

$output = ucwords('hello world');
echo $output;
echo "<br>";

# str_replace()
# Replace all occurences of a search string with a replacement

$text = 'Hello World';
$output = str_replace('World', 'Everyone', $text);
echo $output;
echo "<br>";

# is_string()
# Check if string

$val = 'Hello';
$output = is_string($val);
echo $output;
echo "<br>";

$values = array(true, false, null, 'abc', 33, '33', 22.4, '22.4', '', ' ', 0 , '0');

foreach($values as $value) {
    if(is_string($value)) {
        echo "{$value} is a string<br>";
    }
}


# gzcompress()
# Commpress a string

$string = 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste similique. Dolores, nisi! Provident maiores cum quo ab numquam aperiam incidunt nam eligendi reiciendis architecto, tenetur sapiente tempore voluptatem quis!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ratione culpa laudantium asperiores est eos corporis, alias aliquam, aut dolorum exercitationem. Obcaecati doloribus ad quia perferendis unde! In, sit dolores?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, iste similique. Dolores, nisi! Provident maiores cum quo ab numquam aperiam incidunt nam eligendi reiciendis architecto, tenetur sapiente tempore voluptatem quis!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ratione culpa laudantium asperiores est eos corporis, alias aliquam, aut dolorum exercitationem. Obcaecati doloribus ad quia perferendis unde! In, sit dolores?";

$compressed = gzcompress($string);
echo $compressed;
echo "<br>";

$original = gzuncompress($compressed);
echo $original;
echo "<br>";











?>