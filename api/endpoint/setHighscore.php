<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Define constants for database credentials
define('DB_HOST', 'rdbms.strato.de');
define('DB_USER', 'dbu5464220');
define('DB_PASS', '12Amazon34');
define('DB_NAME', 'dbs9570271');

// Connect to the database
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check for connection error
if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Get the username and new ID from the POST request
$username = $_POST['username'];
$new_id = $_POST['id'];

// Prepare the UPDATE statement
$update_query = "UPDATE users SET id='$new_id' WHERE username='$username'";

//Update the id in the database
if (mysqli_query($mysqli, $update_query)) {
    echo "Username erfolgreich aktualisiert";
} else {
    echo "Fehler beim Aktualisieren: " . mysqli_error($mysqli);
}


// Close the statement and connection
$stmt->close();
$mysqli->close();
?>