<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
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
$id = 100;

$ids = array();
$result = mysqli_query($mysqli, "SELECT id FROM users");
while ($row = mysqli_fetch_assoc($result)) {
    array_push($ids, $row['id']);
}
$usernames = array();
$result = mysqli_query($mysqli, "SELECT username FROM users");
while ($row = mysqli_fetch_assoc($result)) {
    array_push($usernames, $row['username']);
}
$userScore = array();
array_push($userScore, $ids, $usernames); 
echo json_encode($userScore);
$mysqli->close();
?>
