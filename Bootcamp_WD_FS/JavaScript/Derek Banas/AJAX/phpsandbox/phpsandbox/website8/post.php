<?php
    require('config/config.php');
    require('config/db.php');

     // Check for a submit
    if(isset($_POST['delete'])) {
        
        

        // 2. Let's get the form data
        $delete_id = mysqli_real_escape_string($conn, $_POST['delete_id']);
        

        $query = "DELETE FROM posts WHERE id= {$delete_id}";
        // die($query);
        if(mysqli_query($conn, $query)) {
            header('Location: '. ROOT_URL .'');
        } else {
            echo 'ERROR: ' . mysqli_error($conn);
        }
    }



    // GET THE ID from the 
    $id = mysqli_real_escape_string($conn, $_GET['id']);

    // Create query with a Where for post id
    $query = 'SELECT * FROM posts WHERE id= ' . $id;

    // Get the results
    $result = mysqli_query($conn, $query);

    // Fetch data with fetch_all
    $post = mysqli_fetch_assoc($result);
    // var_dump($posts);
    // Free the reuslt
    mysqli_free_result($result);

    // Close the connection
    mysqli_close($conn);


?>


<?php include('inc/header.php'); ?>
    <div class="container">
        <a href="<?php echo ROOT_URL; ?>" class="btn btn-default">Back</a>
        <h1>Posts</h1>
            <h1><?php echo $post['title']; ?></h1>
            <small>Created on <?php echo $post['created_at']; ?>
            by <?php echo $post['author']; ?>
            </small>
            <p><?php echo $post['body']; ?></p>
           <hr>
           <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>" class="float-right">
                <input type="hidden" name="delete_id" value="<?php echo $post['id']; ?>">
                <input type="submit" name="delete" value="Delete" class="btn btn-danger">

           </form>
           <a href="<?php echo ROOT_URL; ?>editpost.php?id=<?php echo $post['id']; ?>" class="btn btn-default"> Edit</a>     
    </div>
<?php include('inc/footer.php'); ?>