<?php
        # SESSIONS THAT WE USE 
    // 1. Check the SUBMIT action
    if(isset($_POST['submit'])) {
       // 2. Start the sesstion
        # Initiate a sesssion
       session_start();
        # set the Variables using the SuperGlobal
        $_SESSION['name'] = htmlentities($_POST['name']);
        $_SESSION['email'] = htmlentities($_POST['email']);

        header('Location: page2.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Sessions</title>
</head>
<body>
        <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <input type="text" name="name" placeholder="Enter Name">
            <br>
            <input type="text" name="email" placeholder="Enter Email">
            <br>
            <input type="submit" name="submit" value="Submit">
        </form>


</body>
</html>