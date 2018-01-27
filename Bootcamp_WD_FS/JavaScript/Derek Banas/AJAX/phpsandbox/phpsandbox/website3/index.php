<?php
    // 0. Variables Declaration
    $msg = '';
    $msgClass = '';

    // 1. Check For Submit to Work
    if(filter_has_var(INPUT_POST, 'submit')) {  
        // echo "Submitted";
        // Ended 1.
        // 2. Get the Form Data.
        # started 2. Variables
            $name = htmlspecialchars($_POST['name']);
            $email = htmlspecialchars($_POST['email']);
            $message = htmlspecialchars($_POST['message']);
        # ended 2.
        // 3. Check the Required Fields
        # start 3. Checking with ifelse
        //  using !empty() to check the values presence
        // also Adding php to the html in the container for message display
        if(!empty($email) && (!empty($name) && (!empty($message)))) {
            // Passed
                //echo 'PASSED';
            // 3.1 check the email
            # start 3.1
                // using a if with FILTER_VALIDATE_EMAIL
                if(filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
                    // Failed
                    $msg = 'Please use a valid email';
                    $msgClass = 'alert-danger';
                } else {
                    // Passed
                    // echo '<h3>PASSED</h3>';
                    // 5. Recipient Email Setup 
                        # 5. start
                            //  5.1 Recipient, subject and data
                           $toEmail = 'andriy.polukhin@gmail.clom';
                           $subject = 'Contact Request From ' .$name;
                           $body = '<h2>Contact Request</h2>
                                    <h4>Name</h4><p> '.$name.'</p>
                                    <h4>Email</h4><p> '.$email.'</p>
                                    <h4>Message</h4><p> '.$message.'</p>
                                    '; 
                            // 5.2 Email Headers
                            $headers = "MIME-Version: 1.0" ."\r\n";
                            $headers .= "Content-Type: text/html; charset=UTF-8" ."\r\n";
                            
                            // 5.3 Additional Headers
                            $headers .= "From: " .$name. "<".$email.">"."\r\n";

                            // 5.4 Mail Function in an if statement

                            if(mail($toEmail, $subject, $body, $headers)) {
                                // Email Sent
                                $msg = 'Your email have been sent';
                                $msgClass = 'alert-success';
                            } else {
                                // Failed to Sent
                                $msg = 'Your email failed to sent';
                                $msgClass = 'alert-danger';

                            }

                        # 5. end
                }
            # end 3.1
        } else {
            // Failed
            $msg = 'Please fille in all fields';
            $msgClass = 'alert-danger';
        }
        #end 3.
        // 4. Set the variables to display in the input fields if POST is not empty.
    }



?>
<!DOCTYPE html>
<html>
    <head>
        <title> Contact Us</title>
        <link rel="stylesheet" href="https://bootswatch.com/3/cosmo/bootstrap.min.css">
    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.php">My Website</a>
                </div>  
            </div>
        </nav>

        <div class="container">
            <?php if($msg != ''): ?>
                    <div class="alert <?php echo $msgClass; ?>">
                        <?php echo $msg ?>
                    </div>
            <?php endif; ?>
            <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <div class="form-group">
                    <label>Name</label>  
                    <input type="text" name="name" class="form-control" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea name="message" class="form-control"><?php echo isset($_POST['message']) ? $message : ''; ?>
                    </textarea>
                </div>
                <br>
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>        
            </form>

        </div>
    </body>
</html>