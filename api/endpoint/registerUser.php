<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Zugangsdaten
$host = 'rdbms.strato.de';
$user = 'dbu5464220';
$password = '12Amazon34';
$database = 'dbs9570271';

// Verbindung zur Datenbank herstellen
$mysqli = new mysqli($host, $user, $password, $database);

// Verbindungsfehler abfangen
if ($mysqli->connect_error) {
    die('Verbindung fehlgeschlagen: ' . $mysqli->connect_error);
}

// Benutzernamen und Passwort aus dem Request holen
$username = $_REQUEST['username'];
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

// Füge einen neuen Benutzer in die Datenbank ein
$query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
$mysqli->query($query);
// Prüfe ob der Benutzer erfolgreich eingefügt wurde
if ($mysqli->affected_rows > 0) {
    // Benutzer erfolgreich eingefügt
    echo 'Benutzer erfolgreich eingefügt';
} else {
    // Benutzer nicht eingefügt
    echo 'Benutzer nicht eingefügt';
}

// Schließe die Verbindung zur Datenbank
$mysqli->close();
?>