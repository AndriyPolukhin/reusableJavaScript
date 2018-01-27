<?php

    $path = 'dir0/dir1/myfile.php';
    $file = 'file1.txt';
/*
    // Return filename
    echo basename($path) . "<br>";
     
    // Return filename without extension
    echo basename($path, '.php') . "<br>";
    
    // Return the dir name from path    
    echo dirname($path) . "<br>";

    // Check if file exist;
    echo file_exists($file) . "<br>";

    // Get the absolute path
    echo realpath($file) . "<br>";

    // Check to see if file
    echo is_file($file) . "<br>";

    // Check is file writable
    echo is_writable($file) . "<br>";

    // Check is readable
    echo is_readable($file) . "<br>";

    // Get filesize
    echo filesize($file) . "<br>";



    // Create a directory
    // mkdir('testing');
    // delete a directory
    // rmdir('testing');

    // Copy file
    // echo copy('file1.txt', 'file2.txt');

    // Rename a file
    // rename('file2.text', 'myfile.txt');

    // Delete a file
    unlink('myfile.txt');

// Write from file to string
// echo file_get_contents($file);

// Write string to file

// echo file_put_contents($file, 'Goodbye World');

// Append a string to file
$current = file_get_contents($file);
$current .= ' Goodbye World';

file_put_contents($file, $current);


// Open File For Reading
$handle = fopen($file, 'r');
$data = fread($handle, filesize($file));
echo $data;
fclose($handle);
*/

// Open file for writing
$handle = fopen($file, 'w');
$txt = "Andriy Polukhin\n";
fwrite($handle, $txt);
$txt = "Anastasia Tsukrova\n";
fwrite($handle, $txt);
fclose($handle);






?>