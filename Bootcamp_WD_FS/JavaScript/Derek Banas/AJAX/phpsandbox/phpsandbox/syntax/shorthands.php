<?php

$loggedIn = true;
$arr = [1,2,3,4,5];
/*
if($loggedIn) {
    echo 'You are logged in';
} else {
    echo 'You are not logged in';
}
*/

echo ($loggedIn) ? "You are Logged In\n":"You are not Logged in\n";
echo "<br>";

$isRegistered = ($loggedIn == true) ? true : false;
echo $isRegistered;
echo "<br>";

$age = 20;
$score = 15;

echo 'Your score is: ' .($score > 10 ? ($age > 10 ? 'Average': 'Exceptional') :($age > 10 ? 'Horrible' : 'Average'));
echo "<br>";


?>


<div>
    <?php if($loggedIn) { ?>
        <h1>Wellcome User</h1>
    <?php } else { ?>
        <h1>Wellcome Guest</h1>
    <?php } ?>
</div>

<div>
        <?php if($loggedIn): ?>
        <h1>Wellcome User2</h1>
    <?php else: ?>
        <h1>Wellcome Guests2</h1>
    <?php endif; ?>
</div>

<div>
    <?php foreach($arr as $val): ?>
        <?php echo "<h3>". $val ."</h3>"; ?>
    <?php endforeach; ?> 
</div>

<div>
    <?php for($i = 0; $i < 10; $i++): ?>
        <li><?php echo $i; ?></li>
    <?php endfor; ?>
</div>