<?php

# substr()
# Return a portion of a string

//  $output = substr('Hello', 1, 3);
//  $output = substr('Hello', -2);
//  echo $output;


# strlen()
# Return the length of a string

// $output = strlen('Hello World');
// echo $output;

# strpos()
# Finds the position of the first occurence of a sub string

// $output = strpos('Hello World', 'o');
// echo $output;

# strrpos()
# Finds the postion of the last occurence of a sub string

// $output = strrpos('Hello World', 'o');
// echo $output;

# trim()
# Trims whitespace
/*
$text = 'Hello World                      ';
var_dump($text);

$trimmed= trim($text);

var_dump($trimmed);
*/

# strtoupper
# Makes everything uppercase

// $output = strtoupper('Hello World');
// echo $output;

# strtolower
# Makes everything lowercase

// $output = strtolower('HELLO WORLD');
// echo $output;

# ucwords()
# Capitalize every word

// $output = ucwords('hello anastasia and andriy');
// echo $output;

# str_replace()
# Replace all occurences of a search string with a replacement

// $text = 'Hello World';
// $output = str_replace('World', 'Eveyone', $text);
// echo $output;

# is_string()
# Check if string

/*
$val = 'Hello';
$output = is_string($val);
echo $output;
echo "<br>";

$values = array(true, false, null, 'abc', 33, '33', 22.4, '22.4', '', ' ', 0, '0');

foreach($values as $value) {
    if(is_string($value)) {
        echo "{$value} is a string<br>";
    }
}
*/

# gzcompress()
# Compress a string

$string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nulla a ante ullamcorper maximus in tristique tortor. Integer mattis, est id auctor placerat, lorem mi ornare velit, a vestibulum velit ligula ornare metus. Donec congue eros lorem, at scelerisque dui euismod eu. Sed a ipsum erat. Donec vel tellus ut massa sagittis tempor. Suspendisse potenti. Mauris non nunc at nibh laoreet condimentum.";

$compressed = gzcompress($string);

echo $compressed;

$original = gzuncompress($compressed);
echo $original;



?>