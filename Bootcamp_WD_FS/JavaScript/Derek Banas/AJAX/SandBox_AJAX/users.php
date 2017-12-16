<?php

// Create Connection
$conn = mysqli_connect('localhost', 'root', '','testMe');

$query = 'SELECT * FROM users';

// Get Results
$result = mysqli_query($conn, $query);

// Fetch Data

$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);