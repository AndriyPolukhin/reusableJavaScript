<html>

<head>
    <title>Information Gathered</title>
</head>

<body>

    <?php
    
 
  $usersName = $_POST['username'];
  $streetAddress = $_POST['streetaddress'];
  $cityAddress = $_POST['cityaddress'];
    
    
    $randNum = 5;
   
    
  
    $randString = "Random String";
    $dbString = '"Random quotes"';
    
  
    function addNumbers($num1, $num2) {
        
        
        return $num1 + $num2;
        
    }
    
    
    echo "3 + 4 = " . addNumbers(3,4);
    
    
?>

</body>

</html>
