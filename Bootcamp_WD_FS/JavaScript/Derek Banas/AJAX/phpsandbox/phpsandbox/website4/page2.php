<?php
 session_start();

    $_SESSION['name'] = 'Anastasia';
    $name = $_SESSION['name'];
    $email = $_SESSION['email'];

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Php Sessions</title>
</head>
<body>
    <h3>Thank you <?php echo $name; ?>, You have subscribed with the email <?php echo $email; ?></h3>

    <a href="page3.php">Go To Page 3 </a>
</body>
</html>