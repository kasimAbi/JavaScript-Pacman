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
$password = $_REQUEST['password'];

// SELECT-Abfrage vorbereiten
$query = 'SELECT * FROM users WHERE username = ? AND password = ?';
$stmt = $mysqli->prepare($query);

// Platzhalter binden
$stmt->bind_param('ss', $username, $password);

// Abfrage ausführen
$stmt->execute();

// Ergebnis-Set holen
$result = $stmt->get_result();
$data = "TRUE";

// Prüfen, ob Benutzer gefunden wurde
if ($result->num_rows > 0) {
    // Benutzer gefunden
    echo 'Benutzer gefunden';
} else {
    // Benutzer nicht gefunden
    echo 'Benutzer nicht gefunden';
    // response

}

// Verbindung schließen
$mysqli->close();
?>