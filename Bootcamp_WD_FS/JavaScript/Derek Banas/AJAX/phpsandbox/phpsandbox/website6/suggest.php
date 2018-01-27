<?php
// People Array @TODO - GET FROM DB

$people[] = "Steve";
$people[] = "Andriy";
$people[] = "Derek";
$people[] = "John";
$people[] = "Olga";
$people[] = "Anastasia";
$people[] = "Brain";
$people[] = "Hello";
$people[] = "What";
$people[] = "Alexandra";
$people[] = "Olivia";
$people[] = "Mike";
$people[] = "Jason";
$people[] = "Brad";
$people[] = "Yerst";
$people[] = "Alex";


// get Query string
$q = $_REQUEST['q'];

// init a variable
$suggestion = "";

// get Suggestions
if($q !== "") {
    $q = strtolower($q);
    $len = strlen($q);
    foreach($people as $person) {
        if(stristr($q, substr($person, 0, $len))) {
            if($suggestion === "") {
                $suggestion = $person;
            } else {
                $suggestion .= ", $person";
            }
        }
    }
}
 
echo $suggestion === "" ? "No Suggestion" : $suggestion;

?>