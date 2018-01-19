<?php
# DATE FUNCTION 

echo date('d'); // Date
echo date('m'); // Month
echo date('Y'); // Year
echo date('l'); // The day of the week;

echo "<br>";
echo date('m-d-Y');

echo "<br>";

echo date('h'); // Hour
echo date('i'); // min
echo date('s'); // sec
echo date('a'); // AM or PM
echo "<br>";

# SEt time zome
date_default_timezone_set('America/New_York');
echo date('h:i:sa');

echo "<br>";
$timestamp = mktime(21, 14, 54, 9, 17, 1986);
// echo $timestamp;

echo date('m/d/Y h:i:sa', $timestamp);
echo "<br>";

$timestamp2 = strtotime('7:00pm March 22 2018');
echo $timestamp2;
echo "<br>";
echo date('m/d/Y h:i:sa', $timestamp2);
echo "<br>";
$timestamp3 = strtotime('tomorrow');
echo date('m/d/Y h:i:sa', $timestamp3);

echo "<br>";
$timestamp4 = strtotime('next Sunday');
echo date('m/d/Y h:i:sa', $timestamp4);


echo "<br>";
$timestamp5 = strtotime('+2 Month');
echo date('m/d/Y h:i:sa', $timestamp5);

?>