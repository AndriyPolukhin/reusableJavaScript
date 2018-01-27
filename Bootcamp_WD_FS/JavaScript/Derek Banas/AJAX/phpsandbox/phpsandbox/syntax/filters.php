<?php

/*
    // Check for posted data
    # Set up a filter_has_var which take a 0 at start basic
    if(filter_has_var(INPUT_POST, 'data')) {
        echo 'Data Found';
    } else {
        echo 'No Data';
    }


    # Validation of an email
    # FILTER_SANITIZE_EMAIL
    # FILTER_VALIDATE_EMAIL
    # Used intead of a Regular Expretion
    if(filter_has_var(INPUT_POST, 'data')) {
        
        // Variable for sanitization
        $email = $_POST['data'];
        
        // Remove illegal chars with FILTER_SANITIZE_EMAIL
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        echo $email.'<br>';
        
        // The data been filtered by the email pattern
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo 'Email is valid';
        } else {
            echo 'Email is NOT valid';
        }
    }


    # TYPES OF VALIDATIONS THAT CAN BE DONE: 
    # 1. FILTER_VALIDATE_BOOLEAN
    # 2. FILTER_VALIDATE_EMAIL
    # 3. FILTER_VALIDATE_FLOAT
    # 4. FILTER_VALIDATE_INT
    # 5. FILTER_VALIDATE_IP
    # 6. FILTER_VALIDATE_REGEXP
    # 7. FILTER_VALIDATE_URL

    # TYPES OF SANITIZATION THAT CAN BE DONE:
    # 1. FILTER_SANITIZE_EMAIL
    # 2. FILTER_SANITIZE_ENCODED
    # 3. FILTER_SANITIZE_NUMBER_FLOAT
    # 4. FILTER_SANITIZE_NUMBER_INT
    # 5. FILTER_SANITIZE_SPECIAL_CHARS
    # 6. FILTER_SANITIZE_STRING
    # 7. FILTER_SANITIZE_URL




    # FILTER_VALIDATE_INT
    $var = 23;

    if(filter_var($var, FILTER_VALIDATE_INT)) {
        echo $var. ' is a number';
    } else {
        echo $var. ' is NOT a number';
    }
    

    // FILTER_SANITIZE_NUMBER_INT example
    $var = '233k323k42kj34l2kj34lk23';
    var_dump(filter_var($var, FILTER_SANITIZE_NUMBER_INT));
 
    $var = '<script>alert(1)</script>';
    // echo $var;
    echo filter_var($var, FILTER_SANITIZE_SPECIAL_CHARS);
 

   // MAKING A CUSTOM FILTER FOR MULTIPLE FIELD OF THE FORM
   $filters  = array(
    "data" => FILTER_VALIDATE_EMAIL,
    "data2" => array(
        "filter" => FILTER_VALIDATE_INT,
        "options" => array(
            "min_range" => 1,
            "max_range" => 100
            )
        )
   );

   print_r(filter_input_array(INPUT_POST, $filters));
  */

   $arr = array(
       "name" => "andriy polukhin",
       "age" => "32",
       "email" => "andriy.polukhin@gmail.com"
   );

   $filters = array(
       "name" => array(
           "filter" => FILTER_CALLBACK,
           "options" => "ucwords"
       ),
       "age" => array(
           "filter" => FILTER_VALIDATE_INT,
           "options" => array(
               "min_range" => 1,
               "max_range" => 100
           )
        ),
        "email" => FILTER_VALIDATE_EMAIL
   );
   print_r(filter_var_array($arr, $filters));

?>


<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

    <input type="text" name="data">
    <input type="text" name="data2">
    <button type="submit">Submit</button>

</form>