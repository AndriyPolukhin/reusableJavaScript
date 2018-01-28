<?php
    require('config/config.php');
    require('config/db.php');

    // Check for a submit
    if(isset($_POST['submit'])) {
        // 1.  Validation needs to be added in the production code
        

        // 2. Let's get the form data
        $update_id = mysqli_real_escape_string($conn, $_POST['update_id']);
        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $author = mysqli_real_escape_string($conn, $_POST['author']);
        $body = mysqli_real_escape_string($conn, $_POST['body']);

        $query = "UPDATE posts SET 
                    title='$title',
                    author='$author',
                    body='$body'
                WHERE id = {$update_id}";
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
    <h1>EditPost</h1>
        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
            <div class="form-group">
                <label for="">Title</label>
                <input type="text" name="title" class="form-control" value="<?php echo $post['title']; ?>">
            </div>
            <div class="form-group">
                <label for="">Author</label>
                <input type="text" name="author" class="form-control" value="<?php echo $post['author']; ?>">
            </div>
            <div class="form-group">
                <label>Body</label>
                <textarea name="body" class="form-control">
                    <?php echo $post['body']; ?>
                </textarea>
            </div>
            <input type="hidden" name="update_id" value="<?php echo $post['id']; ?>">
            <input type="submit" value="Submit" name="submit" class="btn btn-primary">
        </form>

</div>
<?php include('inc/footer.php'); ?>