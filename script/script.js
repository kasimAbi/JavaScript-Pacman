var canvas = document.getElementById("canvas"); // Canvas
var ctx = canvas.getContext("2d"); // Canvas Context
canvas.width = 1280; // Canvas Breite
canvas.height = 940; // Canvas Höhe
const cWidth = canvas.width; // Canvas Breite
const cHeight = canvas.height; // Canvas Höhe
canvas.style.border = "1px solid black"; // Canvas Rahmen
const p1 = document.getElementsByClassName("Coords"); // Array mit den Koordinaten der Navigationspunkte
const liveimg = document.getElementById("live1"); // Leben
const liveimg2 = document.getElementById("live2"); // Leben 2
const liveimg3 = document.getElementById("live3"); // Leben 3
const startBtn = document.getElementById("start"); // Button zum starten
const menu = document.getElementById("menu"); // Menü
const highscoreContainer = document.getElementById("highscoreContainer"); // Highscore Container
highscoreContainer.style.display = "none"; // Highscore Container durchsichtig
const creditHeader = document.getElementById("creditHeader"); // Entwickler Text
const highscoreHeader = document.getElementById("highscoreHeader"); // Highscore Text
const platzHeader = document.getElementById("platzHeader"); // Platz/Reihe Text
const nameHeader = document.getElementById("nameHeader"); // Name Text
const scoreHeader = document.getElementById("scoreHeader"); // Punktestand Text
const currentSite = document.getElementById("currentSite"); // Welches Layout angezeigt wird
const spracheButton = document.getElementById("spracheButton"); // Button um Sprache zu ändern
const livesLabel = document.getElementById("livesLabel"); // Leben Text
const scoreLabel = document.getElementById("scoreLabel"); // Punkte Text
const table = document.querySelector('table') // Highscore Table
const higscoreBtn = document.getElementById("highscore"); // Layout Highscore öffnen
const scoreValue = document.getElementById("scoreValue"); // Highscore
const menuContainer = document.getElementById("menucontainer"); // Menu Container (Login/Register)
const hgBackBtn = document.getElementById("hgBack"); // Highscore Zurück Button
const creditsContainer = document.getElementById("CreditsContainer"); // Entwickler Container
creditsContainer.style.display = "none"; // Entwickler Container durchsichtig
const creditsBtn = document.getElementById("credits"); // Entwickler Zurück Button (Nach Ende Spiel)
const creditsBackBtn = document.getElementById("cBack"); // Entwickler Zurück Button
const menucontent = document.getElementById("menucontent"); // Menu Content
menucontent.style.display = "none"; // Menu Content durchsichtig
const loginBtn = document.getElementById("login"); // Login Button
const loginContainer = document.getElementById("loginContainer"); // Login Container
const usernameA = document.getElementById("usernameA"); // Benutzername Eingabe
const passwordA = document.getElementById("passwordA"); // Passwort Eingabe
const usernameR = document.getElementById("usernameR"); // Benutzername Eingabe
const passwordR = document.getElementById("passwordR"); // Passwort Eingabe
const email = document.getElementById("email"); // E-Mail Eingabe
const registerButton = document.getElementById("registerR"); // Registrieren Button
const exitBtn = document.getElementById("exit"); // Beenden Button
exitBtn.style.display = "none"; // Beenden Button durchsichtig
const statusLog = document.getElementById("status"); // Status Text

var lives = 3; // Anzahl der Leben
var directionx = 0; // Richtung in x-Richtung Pacman
var directiony = 0; // Richtung in y-Richtung Pacman
var InterSectionUP = false; // Ist Pacman in einer Kreuzung nach oben
var InterSectionDOWN = false; // Ist Pacman in einer Kreuzung nach unten
var InterSectionLEFT = false; // Ist Pacman in einer Kreuzung nach links
var InterSectionRIGHT = false; // Ist Pacman in einer Kreuzung nach rechts
var userFound = false; // Benutzer gefunden
var debugGrid = false; // Debug Grid anzeigen
var then = Date.now(); // Zeit
var gridIsReady = false; // Grid ist bereit
var AreNavDotsReady = false; // Navigationspunkte sind bereit
var direction = ""; // Richtung von Pacman (Tastatur)
var doOnce = false; // Nur einmal ausführen
var doOnce2 = false; // Nur einmal ausführen
var doOnce3 = false; // Nur einmal ausführen
var counterspeed = 0; // Geschwindigkeitszähler Pacman
var lastDot = 0; // Letzter Punkt an dem Pacman war

var lastDotghost1 = 0; // Letzter Punkt Ghost 1
var ghostCounterSpeed = 0; // Geschwindigkeitszähler für den Ghost 1
var changeGhostDirection = false; // Nur einmal ausführen
var changeGhostDirectionCounter = 0; // Nur einmal ausführen
var ghostMoveBack = false; // Ghost 1 bewegt sich zurück
var ghostNavPoints = []; // Array mit den Koordinaten der Navigationspunkte
var dirX = 1; // Richtung in x-Richtung Ghost 1
var dirY = 0; // Richtung in y-Richtung Ghost 1

var lastDotghost2 = 0; // Letzter Punkt Ghost 2
var doOneGhost = false; // Nur einmal ausführen
var ghostReachedPoint = false; // Prüft ob der Ghost den Punkt erreicht hat
var ghost2CounterSpeed = 0; // Geschwindigkeitszähler für den Ghost 2
var doOneGhost2 = false; // Nur einmal ausführen
var ghost2ReachedPoint = false; // Prüft ob der Ghost 2 den Punkt erreicht hat
var changeGhost2Direction = false; // Nur einmal ausführen
var changeGhost2DirectionCounter = 0; // Nur einmal ausführen
var ghost2MoveBack = false; // Ghost 2 bewegt sich zurück
var ghost2NavPoints = []; // Array mit den Koordinaten der Navigationspunkte
var dir2X = 1; // Richtung in x-Richtung Ghost 2
var dir2Y = 0; // Richtung in y-Richtung Ghost 2

var lastDotghost3 = 0; // Letzter Punkt Ghost 3
var ghost3CounterSpeed = 0; // Geschwindigkeitszähler für den Ghost 3
var doOneGhost3 = false; // Nur einmal ausführen
var ghost3ReachedPoint = false; // Prüft ob der Ghost 3 den Punkt erreicht hat
var changeGhost3Direction = false; // Nur einmal ausführen
var changeGhost3DirectionCounter = 0; // Nur einmal ausführen
var ghost3MoveBack = false; // Ghost 3 bewegt sich zurück
var ghost3NavPoints = []; // Array mit den Koordinaten der Navigationspunkte
var dir3X = 1; // Richtung in x-Richtung Ghost 3
var dir3Y = 0; // Richtung in y-Richtung Ghost 3

// Array von x und y koordinaten
var x = 250; // Pacmanx
var y = 250; // Pacmany
// Der Kreis ist nur eine Gitterzelle groß
const pacman_width = 20; // Pacman Breite
const grid = 30; // Gittergröße
const gridSize = cWidth / grid; // Berechne die Gitter Abstände bei 30x17 Gitter
const gridWidth = 20; // Anzahl der Gitterzellen in x-Richtung
const gridHeight = 20; // Anzahl der Gitterzellen in y-Richtung
const gridSizeX = canvas.width / gridWidth; // Größe des Gitters in x-Richtung
const gridSizeY = Math.round(canvas.height / gridHeight); // Größe des Gitters in y-Richtung
var startGame = 0; // Starte Spiel
var punkte = 0; // Highscore
var user = ""; // Benutzer
var wrongUserAndPassword = "Username or Password wrong!" // Benutzername oder Passwort falsch
var userOrEmailExists = "Username or Email already exists!"; // Benutzername oder Email existiert bereits
var registerSuccess = "Registration successfull!"; // Registrierung erfolgreich
var fillAllFields = "Please fill all fields!"; // Bitte alle Felder ausfüllen

/*
 *##########################################################################################################################
 *#
 *#  Game States
 *#
 *#  start: 1
 *#  play: 0
 *#  pause: 0
 *#  end: 0
 *#
 *#  0 = false
 *#  1 = true
 *#
 *#  Wenn das Spiel gestartet wird, wird der Start Screen angezeigt
 *#  Und der Spielzustand auf start gesetzt, also 1
 *##########################################################################################################################
 */
var gameStates = {
  start: 1,
  play: 0,
  pause: 0,
  end: 0,
}
// Spielobjekte:
// pacman
var pacman = {
  x: 100,
  y: 100,
  radius: pacman_width,
  color: "yellow",
  lives: lives,
  superPower: 0,
}
// ghost
var ghost = {
  x: 100,
  y: 100,
  radius: pacman_width,
  color: "red",
}

// ghost 2
var ghost2 = {
  x: 100,
  y: 100,
  radius: pacman_width,
  color: "#eb34c6",
}

// ghost 3
var ghost3 = {
  x: 100,
  y: 100,
  radius: pacman_width,
  color: "blue",
}
/*
 *##########################################################################################################################
 *#
 *#  Game
 *#  Variables
 *#
 *##########################################################################################################################
 */
// Spielfeld erstellen
/*
 * P = Leer/Punkt
 * # = Wand
 * 0 = Powerup
 * P = Pacman
 * G = Ghost
 * Y = Ghost2
 * B = Ghost3
 */
// Spielfeld mit 30x17 Feldröße
var gameField = [
  "##############################",
  "#PPPPPPPPPPPPP##PPPPPPPPPPPPP#",
  "#P####P######P##P######P####P#",
  "#P####P######P##P######P####P#",
  "#PPPPPPPPPPPPPPPPPPPPPPPPPPPP#",
  "#0####P#P############P#P####0#",
  "#PPPPPP#PPPPPP##PPPPPP#PPPPPP#",
  "######P######P##P######P######",
  "######P#PPPPPPPPPPPPPP#P######",
  "######PPP#####WW#####PPP######",
  ".PPPPPP#P####G.BY####P#PPPPPP.",
  "######P#P############P#P######",
  "######P#PPPPPPPPPPPPPP#P######",
  "######P#P############P#P######",
  "#PPPPPPPPPPPPP##PPPPPPPPPPPPP#",
  "#P####P######P##P######P####P#",
  "#PPPP#PPPPPPPPPPPPPPPPPP#PPPP#",
  "####P#P#P############P#P#P####",
  "#PPPPPP#PPPPPP##PPPPPP#PPPPPP#",
  "#0###########P##P###########0#",
  "#PPPPPPPPPPPPPPPPPPPPPPPPPPPP#",
  "##############################",
];

var walls = []; // Wände
var navDots = []; // Freie Felder
// Speichere Wände in Array
function createWallArray() {
  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField[i].length; j++) {
      if (gameField[i][j] == "#") {
        // Wände zum Array hinzufügen
        let x = Math.round(i);
        let y = Math.round(j);
        walls.push({
          x: i,
          y: j
        });
      }
    }
  }
}
/*
 *##########################################################################################################################
 *#
 *#  Zeichne Spielfeld
 *#
 *#
 *##########################################################################################################################
 */
function drawWalls() {
  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField[i].length; j++) {
      // nummeriere alle Gitterzellen
      if (debugGrid == true) {
        ctx.font = "12px Arial";
        ctx.fillStyle = "yellow";
        ctx.fillText(i + " " + j, j * gridSize, i * gridSize);
      }
      // Zeichne die Wände
      if (gameField[i][j] == "#" && gridIsReady == false) {
        // nummeriere die Gitterzellen
        ctx.fillStyle = "#0026FF";
        ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        // Add the walls to the array
        let x = Math.round(i);
        let y = Math.round(j);
        if (debugGrid == true) {
          ctx.font = "12px Arial";
          ctx.fillStyle = "red";
          ctx.fillText((i) + " " + (j), (j) * gridSize, (i + 1) * gridSize);
        }
      }
    }
  }
}
// Zeichne die Geister
function drawGhosts() {
  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField[i].length; j++) {
      // Zeichne Geist 1
      if (gameField[i][j] == "G") {
        ghost.x = j * gridSize + gridSize / 2;
        ghost.y = i * gridSize + gridSize / 2;
        ctx.beginPath();
        ctx.arc(ghost.x, ghost.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = ghost.color;
        ctx.fill();
      }
      // Zeichne Geist 2
      if (gameField[i][j] == "Y") {
        ghost2.x = j * gridSize + gridSize / 2;
        ghost2.y = i * gridSize + gridSize / 2;
        ctx.beginPath();
        ctx.arc(ghost2.x, ghost2.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = ghost2.color;
        ctx.fill();
      }
      // Zeichne Geist 3
      if (gameField[i][j] == "B") {
        ghost3.x = j * gridSize + gridSize / 2;
        ghost3.y = i * gridSize + gridSize / 2;
        ctx.beginPath();
        ctx.arc(ghost3.x, ghost3.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = ghost3.color;
        ctx.fill();
      }
    }
  }
}

// Zeichne Laufwege + Punkte
function pushNavDots() {
  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField[i].length; j++) {
      // Zeichne die Laufwege und die Punkte
      if (gameField[i][j] == "." || gameField[i][j] == "P" || gameField[i][j] == "G" || gameField[i][j] == "L" || gameField[i][j] == "R" || gameField[i][j] == "0" || gameField[i][j] == "Y" || gameField[i][j] == "B" || gameField[i][j] == "W") {
        ctx.fillStyle = "black";
        ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        // Erstelle einen kleinen Kreis in der mitte der Zelle
        ctx.beginPath();
        ctx.arc(j * gridSize + gridSize / 2, i * gridSize + gridSize / 2, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        // Speichere Koordinaten des Kreises
        navDots.push({
          x: j * gridSize + gridSize / 2,
          y: i * gridSize + gridSize / 2,
          gridx: j,
          gridy: i
        });
      }
    }
  }
}
pushNavDots();

// Zeichne das restliche Spielfeld (Methode wird nur einmal aufgerufen)
function drawGameField() {
  for (let i = 0; i < gameField.length; i++) {
    for (let j = 0; j < gameField[i].length; j++) {
      // Zeichne die laufwege und die Powerups
      if (gameField[i][j] == "." || gameField[i][j] == "P" || gameField[i][j] == "G" || gameField[i][j] == "L" || gameField[i][j] == "R" || gameField[i][j] == "0" || gameField[i][j] == "Y" || gameField[i][j] == "B" || gameField[i][j] == "B" || gameField[i][j] == "W") {
        ctx.fillStyle = "black";
        ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        // Erstelle einen kleinen Kreis in der mitte der Zelle
        ctx.beginPath();
        if (gameField[i][j] == "P") {
          ctx.arc(j * gridSize + gridSize / 2, i * gridSize + gridSize / 2, 2, 0, 2 * Math.PI);
          ctx.fillStyle = "white";
        } else if (gameField[i][j] == "0") {
          ctx.moveTo(j * gridSize + gridSize / 2, i * gridSize + gridSize / 2 - 2);
          for (var k = 0; k < 5; k++) {
            // Zeichne Stern (Superpower)
            ctx.lineTo(j * gridSize + gridSize / 2 + 12 * Math.cos(k * 2 * Math.PI / 5 + Math.PI / 5),
              i * gridSize + gridSize / 2 - 12 * Math.sin(k * 2 * Math.PI / 5 + Math.PI / 5));
            ctx.lineTo(j * gridSize + gridSize / 2 + 12 * Math.cos(k * 2 * Math.PI / 5 + 3 * Math.PI / 5),
              i * gridSize + gridSize / 2 - 12 * Math.sin(k * 2 * Math.PI / 5 + 3 * Math.PI / 5));
          }
          ctx.fillStyle = "yellow";
        } else {
          ctx.arc(j * gridSize + gridSize / 2, i * gridSize + gridSize / 2, 2, 0, 2 * Math.PI);
          ctx.fillStyle = "black";
        }
        ctx.fill();
      }
      // Zeichne Pacman
      if (gameField[i][j] == "P" && doOnce == false) {
        pacman.x = 64;
        pacman.y = 64;
        // Erstelle Array des Wands
        createWallArray();
        // Damit es nicht erneut aufgerufen wird
        doOnce = true;
      }
    }
  }
  AreNavDotsReady = true; // NavDots sind gespeichert und nutzbar
}
// Gitter zeichnen
// Code für die Vertikalen Linien
// Nur fürs Debug
function drawGrid() {
  for (let i = 0; i < grid; i++) {
    // Farbe von Grid
    ctx.strokeStyle = "red";
    ctx.moveTo(i * gridSize, 0);
    ctx.lineTo(i * gridSize, cHeight);
    ctx.stroke();
  }
  // Code für die Horizontalen Linien
  for (let i = 0; i < grid; i++) {
    ctx.moveTo(0, i * gridSize);
    ctx.lineTo(cWidth, i * gridSize);
    ctx.stroke();
  }
}
spracheButton.style.backgroundImage = "url('/images/DeutschlandFlagge.jpg')";
spracheButton.style.backgroundRepeat = "no-repeat";
spracheButton.style.backgroundSize = "cover";
// Sprache Englisch und Deutsch
spracheButton.addEventListener("click", function() {
  if (spracheButton.innerHTML == "Deutsch") {
    spracheButton.innerHTML = "English";
    creditHeader.innerHTML = "Credits";
    highscoreHeader.innerHTML = "Highscore";
    platzHeader.innerHTML = "Place";
    nameHeader.innerHTML = "Name";
    scoreHeader.innerHTML = "Score";
    currentSite.innerHTML = "Mainmenu";
    livesLabel.innerHTML = "Lives";
    scoreLabel.innerHTML = "Score";
    cBack.value = "Back";
    hgBack.value = "Back";
    usernameA.placeholder = "Username";
    usernameR.placeholder = "Username";
    passwordA.placeholder = "Password";
    passwordR.placeholder = "Password";
    loginBtn.value = "Login";
    registerButton.value = "Register";
    exitBtn.value = "Exit";
    wrongUserAndPassword = "Username or Password wrong!";
    userOrEmailExists = "Username or Email already exists!";
    registerSuccess = "Registration successfull!";
    fillAllFields = "Please fill all fields!";
    spracheButton.style.backgroundImage = "url('/images/DeutschlandFlagge.jpg')";
    spracheButton.style.backgroundRepeat = "no-repeat";
    spracheButton.style.backgroundSize = "cover";
  } else {
    spracheButton.innerHTML = "Deutsch";
    creditHeader.innerHTML = "Entwickler";
    highscoreHeader.innerHTML = "Höchstpunkte";
    platzHeader.innerHTML = "Platz";
    nameHeader.innerHTML = "Name";
    scoreHeader.innerHTML = "Punkte";
    currentSite.innerHTML = "Hauptmenü";
    livesLabel.innerHTML = "Leben";
    scoreLabel.innerHTML = "Punkte";
    cBack.value = "Zurück";
    hgBack.value = "Zurück";
    usernameA.placeholder = "Benutzername";
    usernameR.placeholder = "Benutzername";
    passwordA.placeholder = "Passwort";
    passwordR.placeholder = "Passwort";
    loginBtn.value = "Einloggen";
    registerButton.value = "Registrieren";
    exitBtn.value = "Beenden";
    wrongUserAndPassword = "Username oder Passwort falsch!";
    userOrEmailExists = "Username oder Email bereits vorhanden!";
    registerSuccess = "Registrierung erfolgreich!";
    fillAllFields = "Bitte alle Felder ausfüllen!";
    spracheButton.style.backgroundImage = "url('/images/EnglandFlagge.jpg')";
    spracheButton.style.backgroundRepeat = "no-repeat";
    spracheButton.style.backgroundSize = "cover";
  }
});

// Öffnet Highscore
higscoreBtn.addEventListener("click", function() {
  gameStates.pause = 1;
  highscoreContainer.style.display = "block";
  menuContainer.style.display = "none";
  highscore.style.display = "block"
  backBtn.style.display = "block";
});

// Ruft alle Zeichnen-Methoden auf
function draw() {
  if (debugGrid) {
    drawGrid();
  }
  if (gridIsReady == false) {
    drawWalls();
    drawWalls();
    drawWalls();
    drawWalls();
    drawGhosts();
  }
  gridIsReady = true;
  drawGameField();

  // Zeichne den Kreis an der aktuellen x- und y-Position
  ctx.beginPath();
  ctx.arc(pacman.x, pacman.y, pacman_width, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
  // Zeichne die Geist als roten Kreis
  ctx.beginPath();
  ctx.arc(ghost.x, ghost.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = ghost.color;
  ctx.fill();

  // Zeichne die Geist 2 als pinken Kreis
  ctx.beginPath();
  ctx.arc(ghost2.x, ghost2.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = ghost2.color;
  ctx.fill();

  // Zeichne die Geist 3 als blauen Kreis
  ctx.beginPath();
  ctx.arc(ghost3.x, ghost3.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = ghost3.color;
  ctx.fill();
}
/*
 *##########################################################################################################################
 *#
 *#  Event listener for the keyboard
 *#  Arrow up
 *#  Arrow down
 *#  Arrow left
 *#  Arrow right
 *#
 *##########################################################################################################################
 */
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp" && !InterSectionUP) {
    direction = "up";
    directionx = 0;
    directiony = -1;
    // Kontrolle ob Pacman in Canvas ist
    if (y == pacman_width) {
      directiony = 0;
    }
  } else if (event.key === "ArrowDown" && !InterSectionDOWN) {
    direction = "down";
    directionx = 0;
    if (!((Math.round(pacman.x) == 619 || Math.round(pacman.x) == 661) && Math.round(pacman.y) == 363)) {
      directiony = 1;
    }
    // Kontrolle ob Pacman in Canvas ist
    if (y + pacman_width > canvas.height) {
      directiony = 0;
    }
  } else if (event.key === "ArrowLeft" && !InterSectionLEFT) {
    direction = "left";
    directionx = -1;
    directiony = 0;
    // Kontrolle ob Pacman in Canvas ist
    if (x == pacman_width) {
      directionx = 0;
    }
  } else if (event.key === "ArrowRight" && !InterSectionRIGHT) {
    direction = "right";
    directionx = 1;
    directiony = 0;
    // Kontrolle ob Pacman in Canvas ist
    if (x + pacman_width > canvas.width) {
      directionx = 0;
    }
  }
});
/*
 *##########################################################################################################################
 *#
 *#  Move the Ghost
 *#
 *##########################################################################################################################
 */
function moveGhost() {
  // Erweiterte Geist Bewegung
  // 1. Wähle einen Punkt aus der NavDots Liste aus
  // 2. Gehe zum Punkt
  // 3. Wähle einen neuen Punkt aus
  // 4. Gehe zum Punkt
  // 5. Wiederhole Schritt 3 und 4
  // 6. Wenn der Geist den Punkt erreicht hat, wähle einen neuen Punkt aus
  var selectedDot; // Ausgewählter Punkt

  // Geist erreicht Punkt
  if (ghostReachedPoint == true) {
    try {
      selectedDot = ghostNavPoints[Math.floor(Math.random() * ghostNavPoints.length)];
      ghostReachedPoint = false;
    } catch (error) {
      console.log("Error: " + error);
    }
  } else {
    if (doOneGhost == false) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dirX = Math.round(randomNumberX);
      dirY = Math.round(randomNumberY);
      doOneGhost = true;
    }
    if (changeGhostDirectionCounter == 90) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dirX = Math.round(randomNumberX);
      dirY = Math.round(randomNumberY);
      changeGhostDirectionCounter = 0;
    }
    if (getNextDotInDirectionGhost(dirX, dirY) == null) {
      changeGhostDirection = true;
    }
    if (changeGhostDirection == true) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dirX = Math.round(randomNumberX);
      dirY = Math.round(randomNumberY);
      changeGhostDirection = false;
    }
    console.log("Change Ghost Direction" + dirX + " " + dirY);
    changeGhostDirectionCounter++;
    // 1 richtung wählen
    // 2 prüfen ob in der eine Wand
    // 3 bewege den Ghost in die Richtung
    // Wiederhole 2 und 3 bis der Ghost eine Wand trifft
    var closestDot = getNextDotInDirectionGhost(dirX, dirY);
    if (closestDot != null) {
      if (ghostCounterSpeed == 18) {
        lastDotghost1 = closestDot;
        var dx = closestDot.x - ghost.x;
        var dy = closestDot.y - ghost.y;
        // Set the direction of movement to the correct values
        dirX = Math.sign(dx);
        dirY = Math.sign(dy);
        ghost.x = closestDot.x;
        ghost.y = closestDot.y;
        ghostCounterSpeed = 0;
      } else
        ghostCounterSpeed++;
    }
  }
}

function isGhostCollidingWithWall(dirx, diry) {
  // Get pacamn position in grid coordinates
  var Pgridx = Math.floor(ghost.x / gridSize);
  var Pgridy = Math.floor(ghost.y / gridSize);
  // Check if Pacman is colliding with a wall in the specified direction
  // Return true if a wall is found next to pacman
  // use the walls array to check if there is a wall
  if (dirx > 0) {
    if (walls[Pgridx + 1][Pgridy] == 1) {
      return true;
    }
  } else if (dirx < 0) {
    if (walls[Pgridx - 1][Pgridy] == 1) {
      return true;
    }
  } else if (diry > 0) {
    if (walls[Pgridx][Pgridy + 1] == 1) {
      return true;
    }
  } else
  if (diry < 0) {
    if (walls[Pgridx][Pgridy - 1] == 1) {
      return true;
    }
  }
  return false;
}

/*
 *##########################################################################################################################
 *#
 *#  Move the Ghost
 *#
 *##########################################################################################################################
 */
function moveGhost2() {
  // Erweiterte Geist Bewegung
  // 1. Wähle einen Punkt aus der NavDots Liste aus
  // 2. Gehe zum Punkt
  // 3. Wähle einen neuen Punkt aus
  // 4. Gehe zum Punkt
  // 5. Wiederhole Schritt 3 und 4
  // 6. Wenn der Geist den Punkt erreicht hat, wähle einen neuen Punkt aus
  // Must be global
  var selectedDot;

  if (ghost2ReachedPoint == true) {
    try {
      selectedDot = ghost2NavPoints[Math.floor(Math.random() * ghost2NavPoints.length)];
      console.log("Selected Dot: " + selectedDot.x + " " + selectedDot.y);
      ghost2ReachedPoint = false;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  if (ghost2ReachedPoint == false) {
    if (doOneGhost2 == false) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dir2X = Math.round(randomNumberX);
      dir2Y = Math.round(randomNumberY);
      doOneGhost2 = true;
    }
    if (changeGhost2DirectionCounter == 90) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dir2X = Math.round(randomNumberX);
      dir2Y = Math.round(randomNumberY);
      changeGhost2DirectionCounter = 0;
    }
    if (getNextDotInDirectionGhost2(dir2X, dir2Y) == null) {
      changeGhost2Direction = true;
    }
    if (changeGhost2Direction == true) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dir2X = Math.round(randomNumberX);
      dir2Y = Math.round(randomNumberY);
      changeGhost2Direction = false;
    }
    console.log("Change Ghost2 Direction" + dir2X + " " + dir2Y);
    changeGhost2DirectionCounter++;
    // 1 richtung wählen
    // 2 prüfen ob in der eine Wand
    // 3 bewege den Ghost in die Richtung
    // Wiederhole 2 und 3 bis der Ghost eine Wand trifft
    var closestDot = getNextDotInDirectionGhost2(dir2X, dir2Y);
    if (closestDot != null) {
      //console.log(counterspeed);
      if (ghost2CounterSpeed == 18) {
        lastDotghost2 = closestDot;
        var dx = closestDot.x - ghost2.x;
        var dy = closestDot.y - ghost2.y;
        // Set the direction of movement to the correct values
        dir2X = Math.sign(dx);
        dir2Y = Math.sign(dy);
        ghost2.x = closestDot.x;
        ghost2.y = closestDot.y;
        ghost2CounterSpeed = 0;
      } else
        ghost2CounterSpeed++;
    }
  }
}

function isGhost2CollidingWithWall(dir2x, dir2y) {
  // Get pacamn position in grid coordinates
  var Pgridx = Math.floor(ghost2.x / gridSize);
  var Pgridy = Math.floor(ghost2.y / gridSize);
  // Check if Pacman is colliding with a wall in the specified direction
  // Return true if a wall is found next to pacman
  // use the walls array to check if there is a wall
  if (dir2x > 0) {
    if (walls[Pgridx + 1][Pgridy] == 1) {
      return true;
    }
  } else if (dir2x < 0) {
    if (walls[Pgridx - 1][Pgridy] == 1) {
      return true;
    }
  } else if (dir2y > 0) {
    if (walls[Pgridx][Pgridy + 1] == 1) {
      return true;
    }
  } else
  if (dir2y < 0) {
    if (walls[Pgridx][Pgridy - 1] == 1) {
      return true;
    }
  }
  return false;
}

/*
 *##########################################################################################################################
 *#
 *#  Move the Ghost
 *#
 *##########################################################################################################################
 */
function moveGhost3() {
  // Erweiterte Geist Bewegung
  // 1. Wähle einen Punkt aus der NavDots Liste aus
  // 2. Gehe zum Punkt
  // 3. Wähle einen neuen Punkt aus
  // 4. Gehe zum Punkt
  // 5. Wiederhole Schritt 3 und 4
  // 6. Wenn der Geist den Punkt erreicht hat, wähle einen neuen Punkt aus
  // Must be global
  var selectedDot;

  if (ghost3ReachedPoint == true) {
    try {
      selectedDot = ghost3NavPoints[Math.floor(Math.random() * ghost3NavPoints.length)];
      console.log("Selected Dot: " + selectedDot.x + " " + selectedDot.y);
      ghost3ReachedPoint = false;
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  if (ghost3ReachedPoint == false) {
    if (doOneGhost3 == false) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dir3X = Math.round(randomNumberX);
      dir3Y = Math.round(randomNumberY);
      doOneGhost3 = true;
    }
    if (changeGhost3DirectionCounter == 90) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dir3X = Math.round(randomNumberX);
      dir3Y = Math.round(randomNumberY);
      changeGhost3DirectionCounter = 0;
    }
    if (getNextDotInDirectionGhost3(dir3X, dir3Y) == null) {
      changeGhost3Direction = true;
    }
    if (changeGhost3Direction == true) {
      let randomNumberX = Math.random() * (1 - (-1)) + -1;
      let randomNumberY = Math.random() * (1 - (-1)) + -1;
      dir3X = Math.round(randomNumberX);
      dir3Y = Math.round(randomNumberY);
      changeGhost3Direction = false;
    }
    console.log("Change Ghost3 Direction" + dir3X + " " + dir3Y);
    changeGhost3DirectionCounter++;
    // 1 richtung wählen
    // 2 prüfen ob in der eine Wand
    // 3 bewege den Ghost in die Richtung
    // Wiederhole 2 und 3 bis der Ghost eine Wand trifft
    var closestDot = getNextDotInDirectionGhost3(dir3X, dir3Y);
    if (closestDot != null) {
      //console.log(counterspeed);
      if (ghost3CounterSpeed == 18) {
        lastDotghost3 = closestDot;
        var dx = closestDot.x - ghost3.x;
        var dy = closestDot.y - ghost3.y;
        // Set the direction of movement to the correct values
        dir3X = Math.sign(dx);
        dir3Y = Math.sign(dy);
        ghost3.x = closestDot.x;
        ghost3.y = closestDot.y;
        ghost3CounterSpeed = 0;
      } else
        ghost3CounterSpeed++;
    }
  }
}

function isGhost3CollidingWithWall(dir3x, dir3y) {
  // Get pacamn position in grid coordinates
  var Pgridx = Math.floor(ghost3.x / gridSize);
  var Pgridy = Math.floor(ghost3.y / gridSize);
  // Check if Pacman is colliding with a wall in the specified direction
  // Return true if a wall is found next to pacman
  // use the walls array to check if there is a wall
  if (dir3x > 0) {
    if (walls[Pgridx + 1][Pgridy] == 1) {
      return true;
    }
  } else if (dir3x < 0) {
    if (walls[Pgridx - 1][Pgridy] == 1) {
      return true;
    }
  } else if (dir3y > 0) {
    if (walls[Pgridx][Pgridy + 1] == 1) {
      return true;
    }
  } else
  if (dir2y < 0) {
    if (walls[Pgridx][Pgridy - 1] == 1) {
      return true;
    }
  }
  return false;
}

/*
 *##########################################################################################################################
 *#
 *#  Game loop
 *#   - Zeichne Spielfeld
 *#   - Zeichne Pacman
 *#   - Move Pacman
 *#   - Prüfe ob Pacman etwas berührt
 *#   - Prüfe ob Pacman in einer Wand ist
 *#   - Prüfe ob Pacman in einem Leeren Feld ist
 *#
 *##########################################################################################################################
 */
function loop() {
  // Gebe die FPS in der Konsole aus
  // Berechne die FPS
  var now = performance.now();
  performance.fps = 1000 / (now - then);
  var fps = Math.round(1000 / (now - then));
  //console.log("FPS: " + then + " " + now + " " + fps);
  then = now;

  if (gameStates.end == 1 && !doOnce3) {
    menu.style.display = "block";
    menuContainer.style.display = "block";
    currentSite.innerHTML = "Game Over";
    exitBtn.style.display = "block";
    startBtn.style.display = "none";
    doOnce3 = true;
  }

  requestAnimationFrame(loop);
  if (gameStates.start == 1) {

  } else if (gameStates.play == 1 && gameStates.pause == 0) {
    ghostNavPoints = navDots;
    moveGhost();

    ghost2NavPoints = navDots;
    moveGhost2();

    ghost3NavPoints = navDots;
    moveGhost3();

    var closestDot = getNextDotInDirection1(directionx, directiony);

    if (closestDot != null) {
      console.log("closestDot: " + closestDot.x, closestDot.y);
      movePacmanToNextDot(closestDot);
    }

    middleline();

    draw();

    // Pacman berührt Geist?
    if (isPacmanCollidingWithGhost()) {
      if (pacman.superPower == 0) {
        removeLive();
      } else { // Wenn Pacman Geist frisst, Geist wird Ursprungsort Positioniert
        ghost.x = 14 * gridSize + gridSize / 2;
        ghost.y = 10 * gridSize + gridSize / 2;
        punkte += 50;
      }
    }

    // Pacman berührt Geist2?
    if (isPacmanCollidingWithGhost2()) {
      if (pacman.superPower == 0) {
        removeLive();
      } else { // Wenn Pacman Geist frisst, Geist wird Ursprungsort Positioniert
        ghost2.x = 15 * gridSize + gridSize / 2;
        ghost2.y = 10 * gridSize + gridSize / 2;
        punkte += 50;
      }
    }

    // Pacman berührt Geist3?
    if (isPacmanCollidingWithGhost3()) {
      if (pacman.superPower == 0) {
        removeLive();
      } else { // Wenn Pacman Geist frisst, Geist wird Ursprungsort Positioniert
        ghost3.x = 16 * gridSize + gridSize / 2;
        ghost3.y = 10 * gridSize + gridSize / 2;
        punkte += 50;
      }
    }

    function isPacmanCollidingWithGhost() {
      // Pacman Koordinaten ausrechnen
      var Pgridx = Math.floor(pacman.x / gridSize);
      var Pgridy = Math.floor(pacman.y / gridSize);
      // Geist Koordinaten ausrechnen
      var Ggridx = Math.floor(ghost.x / gridSize);
      var Ggridy = Math.floor(ghost.y / gridSize);
      // Koordinaten mitainander vergleichen
      if (Pgridx == Ggridx && Pgridy == Ggridy) {
        return true;
      }
      return false;
    }

    function isPacmanCollidingWithGhost2() {
      var Pgridx = Math.floor(pacman.x / gridSize);
      var Pgridy = Math.floor(pacman.y / gridSize);

      var Ggridx = Math.floor(ghost2.x / gridSize);
      var Ggridy = Math.floor(ghost2.y / gridSize);

      if (Pgridx == Ggridx && Pgridy == Ggridy) {
        return true;
      }
      return false;
    }

    function isPacmanCollidingWithGhost3() {
      var Pgridx = Math.floor(pacman.x / gridSize);
      var Pgridy = Math.floor(pacman.y / gridSize);

      var Ggridx = Math.floor(ghost3.x / gridSize);
      var Ggridy = Math.floor(ghost3.y / gridSize);

      if (Pgridx == Ggridx && Pgridy == Ggridy) {
        return true;
      }
      return false;
    }

    // Wenn alle Bilder (Leben) eine opacity von 0.5 haben, dann ist das Spiel vorbei
    if (liveimg.style.opacity == 0.5) {
      gameStates.play = 0;
      gameStates.end = 1;
      gameStates.pause = 1;
      console.log("game over");
    }
    var pacmanx = Math.round(pacman.x / gridSize);
    var pacmany = Math.round(pacman.y / gridSize);
    var debugstring = "x: " + Math.round(pacman.x) + " y: " + Math.round(pacman.y) + " &nbsp Grid: " + pacmanx + " " + pacmany + "&nbsp fps:" + fps;

    p1[0].innerHTML = debugstring;
  }

}
setInterval(loop(), 1000 / 60); // Starte loop mit 60 FPS

// In der Mitte durchlaufen können
function middleline() {
  if (Math.round(pacman.x) == 21 && Math.round(pacman.y) == 448 && directionx == -1) {
    pacman.x = 1259;
  } else if (Math.round(pacman.x) == 1259 && Math.round(pacman.y) == 448 && directionx == 1) {
    pacman.x = 21;
  }
  if (Math.round(ghost.x) == 21 && Math.round(ghost.y) == 448) {
    ghost.x = 1216;
  } else if (Math.round(ghost.x) == 1259 && Math.round(ghost.y) == 448) {
    ghost.x = 64;
  }
  if (Math.round(ghost2.x) == 21 && Math.round(ghost2.y) == 448) {
    ghost2.x = 1216;
  } else if (Math.round(ghost2.x) == 1259 && Math.round(ghost2.y) == 448) {
    ghost2.x = 64;
  }
  if (Math.round(ghost3.x) == 21 && Math.round(ghost3.y) == 448) {
    ghost3.x = 1216;
  } else if (Math.round(ghost3.x) == 1259 && Math.round(ghost3.y) == 448) {
    ghost3.x = 64;
  }
}

// Wenn Superpower, kann Pacman Geister essen
async function setPacmanSuperpower() {
  var timer = 30;
  ghost.color = "green";
  ghost2.color = "green";
  ghost3.color = "green";
  pacman.superPower = 1;
  while (timer > 0) {
    // Jede Sekunde wird timer um 1 verringert
    await new Promise(resolve => setTimeout(resolve, 1000));
    timer--;
  }
  ghost.color = "red";
  ghost2.color = "#eb34c6";
  ghost3.color = "blue";
  pacman.superPower = 0;
}

/*
 *##############################################################################################################
 *##############################################################################################################
 * DEBUG FUNCTIONS
 *
 *##############################################################################################################
 *##############################################################################################################
 */
// Finde den nächsten Punkt in der angegebenen Richtung
// Überprüfen Sie, ob in Richtung von Pacman keine Wand ist
// Wenn ja, dann bewegen Sie Pacman zum nächsten Punkt in Richtung von Pacman
// Wenn nein, bleibt Pacman stehen, um auf Richtungsänderung zu warten

// Überprüfen Sie, ob es in dem Array navDots einen Punkt gibt, der in Richtung von Pacman liegt
// Wenn ja, dann bewegen Sie Pacman zu diesem Punkt
// Wenn nein, bewegen Sie Pacman zum nächsten Punkt in Richtung von Pacman
// Wenn nein, bleibt Pacman stehen, um auf Richtungsänderung zu warten.
function getNextDotInDirection1(directionx, directiony) {
  let closestDot = null;
  let closestDistance = Infinity;

  // Finde den nächsten Punkt in der angegebenen Richtung
  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].x > pacman.x && directionx > 0 && navDots[i].y == pacman.y) {
      // Punkt(Freies Feld) ist rechts zu Pacman also kann es sich dahin bewegen
      const dx = navDots[i].x - pacman.x;
      const dy = navDots[i].y - pacman.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        // prüft ob er am laufen ist
        if (distance != null) {
          // prüft ob die entfernung größer als 50 ist
          if (!(Math.abs(navDots[i].x - pacman.x) > 50)) {
            // Nächste Freie Punkt wird in Rückgabewert gespeichert
            closestDot = navDots[i];
          }
        }
      }
    }

    if (navDots[navDots.length - 1 - i].x < pacman.x && directionx < 0 && navDots[navDots.length - 1 - i].y == pacman.y) {
      // Punkt(Freies Feld) ist links zu Pacman also kann es sich dahin bewegen
      const dx = navDots[navDots.length - 1 - i].x - pacman.x;
      const dy = navDots[navDots.length - 1 - i].y - pacman.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        // prüft ob er am laufen ist
        if (directionx != 0 || directiony != 0) {
          // prüft ob die entfernung größer als 50 ist
          if (!(Math.abs(navDots[navDots.length - 1 - i].x - pacman.x) > 50)) {
            // Nächste Freie Punkt wird in Rückgabewert gespeichert
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }

  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].y > pacman.y && directiony > 0 && navDots[i].x == pacman.x) {
      // Punkt(Freies Feld) ist unten zu Pacman also kann es sich dahin bewegen
      const dx = navDots[i].x - pacman.x;
      const dy = navDots[i].y - pacman.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        // prüft ob er am laufen ist
        if (directionx != 0 || directiony != 0) {
          // prüft ob die entfernung größer als 50 ist
          if (!(Math.abs(navDots[i].y - pacman.y) > 50)) {
            // Nächste Freie Punkt wird in Rückgabewert gespeichert
            closestDot = navDots[i];
          }
        }
      }
    } else if (navDots[navDots.length - 1 - i].y < pacman.y && directiony < 0 && navDots[navDots.length - 1 - i].x == pacman.x) {
      // Punkt(Freies Feld) ist auf zu Pacman also kann es sich dahin bewegen
      const dx = navDots[navDots.length - 1 - i].x - pacman.x;
      const dy = navDots[navDots.length - 1 - i].y - pacman.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        // prüft ob er am laufen ist
        if (directionx != 0 || directiony != 0) {
          // prüft ob die entfernung größer als 50 ist
          if (!(Math.abs(navDots[navDots.length - 1 - i].y - pacman.y) > 50)) {
            // Nächste Freie Punkt wird in Rückgabewert gespeichert
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  return closestDot;
}

function getNextDotInDirectionGhost(directionGx, directionGy) {
  let closestDot = null;
  let closestDistance = Infinity;

  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].x > ghost.x && directionGx > 0 && navDots[i].y == ghost.y) {
      const dx = navDots[i].x - ghost.x;
      const dy = navDots[i].y - ghost.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (distance != null) {
          if (!(Math.abs(navDots[i].x - ghost.x) > 50)) {
            closestDot = navDots[i];
          }
        }
      }
    }
    if (navDots[navDots.length - 1 - i].x < ghost.x && directionGx < 0 && navDots[navDots.length - 1 - i].y == ghost.y) {
      const dx = navDots[navDots.length - 1 - i].x - ghost.x;
      const dy = navDots[navDots.length - 1 - i].y - ghost.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[navDots.length - 1 - i].x - ghost.x) > 50)) {
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].y > ghost.y && directionGy > 0 && navDots[i].x == ghost.x) {
      const dx = navDots[i].x - ghost.x;
      const dy = navDots[i].y - ghost.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[i].y - ghost.y) > 50)) {
            closestDot = navDots[i];
          }
        }
      }
    } else if (navDots[navDots.length - 1 - i].y < ghost.y && directionGy < 0 && navDots[navDots.length - 1 - i].x == ghost.x) {
      const dx = navDots[navDots.length - 1 - i].x - ghost.x;
      const dy = navDots[navDots.length - 1 - i].y - ghost.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[navDots.length - 1 - i].y - ghost.y) > 50)) {
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  return closestDot;
}

function getNextDotInDirectionGhost2(directionGx, directionGy) {
  let closestDot = null;
  let closestDistance = Infinity;

  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].x > ghost2.x && directionGx > 0 && navDots[i].y == ghost2.y) {
      const dx = navDots[i].x - ghost2.x;
      const dy = navDots[i].y - ghost2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (distance != null) {
          if (!(Math.abs(navDots[i].x - ghost2.x) > 50)) {
            closestDot = navDots[i];
          }
        }
      }
    }
    if (navDots[navDots.length - 1 - i].x < ghost2.x && directionGx < 0 && navDots[navDots.length - 1 - i].y == ghost2.y) {
      const dx = navDots[navDots.length - 1 - i].x - ghost2.x;
      const dy = navDots[navDots.length - 1 - i].y - ghost2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[navDots.length - 1 - i].x - ghost2.x) > 50)) {
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].y > ghost2.y && directionGy > 0 && navDots[i].x == ghost2.x) {
      const dx = navDots[i].x - ghost2.x;
      const dy = navDots[i].y - ghost2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[i].y - ghost2.y) > 50)) {
            closestDot = navDots[i];
          }
        }
      }
    } else if (navDots[navDots.length - 1 - i].y < ghost2.y && directionGy < 0 && navDots[navDots.length - 1 - i].x == ghost2.x) {
      const dx = navDots[navDots.length - 1 - i].x - ghost2.x;
      const dy = navDots[navDots.length - 1 - i].y - ghost2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[navDots.length - 1 - i].y - ghost2.y) > 50)) {
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  return closestDot;
}

function getNextDotInDirectionGhost3(directionGx, directionGy) {
  let closestDot = null;
  let closestDistance = Infinity;

  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].x > ghost3.x && directionGx > 0 && navDots[i].y == ghost3.y) {
      const dx = navDots[i].x - ghost3.x;
      const dy = navDots[i].y - ghost3.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (distance != null) {
          if (!(Math.abs(navDots[i].x - ghost3.x) > 50)) {
            closestDot = navDots[i];
          }
        }
      }
    }
    if (navDots[navDots.length - 1 - i].x < ghost3.x && directionGx < 0 && navDots[navDots.length - 1 - i].y == ghost3.y) {
      const dx = navDots[navDots.length - 1 - i].x - ghost3.x;
      const dy = navDots[navDots.length - 1 - i].y - ghost3.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[navDots.length - 1 - i].x - ghost3.x) > 50)) {
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  for (let i = 0; i < navDots.length; i++) {
    if (navDots[i].y > ghost3.y && directionGy > 0 && navDots[i].x == ghost3.x) {
      const dx = navDots[i].x - ghost3.x;
      const dy = navDots[i].y - ghost3.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[i].y - ghost3.y) > 50)) {
            closestDot = navDots[i];
          }
        }
      }
    } else if (navDots[navDots.length - 1 - i].y < ghost3.y && directionGy < 0 && navDots[navDots.length - 1 - i].x == ghost3.x) {
      const dx = navDots[navDots.length - 1 - i].x - ghost3.x;
      const dy = navDots[navDots.length - 1 - i].y - ghost3.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < closestDistance) {
        closestDistance = distance;
        if (directionGx != 0 || directionGy != 0) {
          if (!(Math.abs(navDots[navDots.length - 1 - i].y - ghost3.y) > 50)) {
            closestDot = navDots[navDots.length - 1 - i];
          }
        }
      }
    }
  }
  return closestDot;
}

// Bewege Pacman zur angegebenen Position zu
function movePacmanToNextDot(closestDot) {
  let speed = 0;
  var Pgridx = Math.floor(pacman.x / gridSize);
  var Pgridy = Math.floor(pacman.y / gridSize);

  if (counterspeed == 18) {
    lastDot = closestDot;
    // Berechne Entfernung von Pacman und Zielposition
    var dx = closestDot.x - pacman.x;
    var dy = closestDot.y - pacman.y;

    // Setze Richtung von Bewegung zu der richtigen Variable
    directionx = Math.sign(dx);
    directiony = Math.sign(dy);

    pacman.x = lastDot.x;
    pacman.y = lastDot.y;
    counterspeed = 0;
  } else
    // Wenn größer/kleiner null, ist Pacman am laufen (links oder rechts)
    if (directionx > 0) {
      // Wenn Spielfeld-Position ./P/0 ist, kann Pacman hinlaufen
      if (gameField[Pgridy][Pgridx] == "." || gameField[Pgridy][Pgridx] == "P" || gameField[Pgridy][Pgridx] == "0") {
        pacman.y += directiony * speed;
        pacman.x += directionx * speed;
        counterspeed++;
      }
    }
  else
  if (directionx < 0) {
    if (gameField[Pgridy][Pgridx] == "." || gameField[Pgridy][Pgridx] == "P" || gameField[Pgridy][Pgridx] == "0") {
      pacman.y += directiony * speed;
      pacman.x += directionx * speed;
      counterspeed++;
    }
  } else
  if (directiony > 0) {
    if (gameField[Pgridy][Pgridx] == "W") {

    } else if (gameField[Pgridy][Pgridx] == "." || gameField[Pgridy][Pgridx] == "P" || gameField[Pgridy][Pgridx] == "0") {
      pacman.y += directiony * speed;
      pacman.x += directionx * speed;
      counterspeed++;
    }
  } else
  if (directiony < 0) {
    if (gameField[Pgridy][Pgridx] == "." || gameField[Pgridy][Pgridx] == "P" || gameField[Pgridy][Pgridx] == "0") {
      pacman.y += directiony * speed;
      pacman.x += directionx * speed;
      counterspeed++;
    }
  }
  // Wenn P oder 0, dann gibt es Punkte und aktuelle Position wird geleert
  if (gameField[Pgridy][Pgridx] == "P" || gameField[Pgridy][Pgridx] == "0") {
    var arr = gameField[Pgridy];
    teilFeld1 = arr.substring(0, Pgridx); // Teilstring von aktuellem Feld ohne aktuelle Position
    teilFeld2 = arr.substring(Pgridx + 1); // Teilstring von aktuellem Feld hinterer Teil
    var newString = teilFeld1 + "." + teilFeld2;
    if (gameField[Pgridy][Pgridx] == "0") {
      // Pacman kann Geister essen
      setPacmanSuperpower();
      punkte += 100;
    }
    gameField[Pgridy] = newString;
    scoreValue.textContent = ++punkte;
    // Gibt es noch Punkte auf dem Spielfeld?
    isPointsAvailable();
  }
}

// Prüft ob noch ein Punkt auf dem Spielfeld vorhanden ist
function isPointsAvailable() {
  for (var index = 0; index < gameField.length; index++) {
    for (var index2 = 0; index2 < gameField[index].length; index2++) {
      if (gameField[index][index2] == "P") {
        return; // Wenn ja, geht das Spiel weiter
      }
    }
  }
  // Alle Punkte wurden aufgesammelt und Spiel wird beendet
  gameStates.end = 1;
  gameStates.pause = 1;
}

/*#############################################################################################################
 *#
 *# Game
 *# Logic
 *#
 *#
 *#############################################################################################################
 */
// Entferne Pacman einen Leben und setze ihn in Ursprungsposition zurück
function removeLive() {
  pacman.lives--;
  if (pacman.lives == 0) {
    liveimg.style.opacity = 0.5;
  } else if (pacman.lives == 1) {
    liveimg2.style.opacity = 0.5;
    pacman.x = 64;
    pacman.y = 64;
  } else if (pacman.lives == 2) {
    liveimg3.style.opacity = 0.5;
    pacman.x = 64;
    pacman.y = 64;
  }
}
// Eventlistner für den StartButton Click Event
startBtn.addEventListener("click", function() {
  gameStates.start = 0;
  gameStates.pause = 0;
  gameStates.play = 1;
  console.log(gameStates);
  menu.style.display = "none";

});
// Eventlistner für den esc KEY
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    gameStates.pause = 1;
    menu.style.display = "block";
  }

});
// Click Event Highscore Button
higscoreBtn.addEventListener("click", function() {
  gameStates.pause = 1;
  highscoreContainer.style.display = "block";
  menuContainer.style.display = "none";
  highscore.style.display = "block";
  backBtn.style.display = "block";
});
// Click Event Back Button
hgBackBtn.addEventListener("click", function() {
  gameStates.pause = 1;
  highscoreContainer.style.display = "none";
  menuContainer.style.display = "block";
});
// Click Event Credits Button
creditsBtn.addEventListener("click", function() {
  gameStates.pause = 1;
  creditsContainer.style.display = "block";
  menuContainer.style.display = "none";
  credits.style.display = "block";

});
// Click Event Back Button
creditsBackBtn.addEventListener("click", function() {
  gameStates.pause = 1;
  creditsContainer.style.display = "none";
  menuContainer.style.display = "block";
});

exitBtn.addEventListener("click", function() {
  console.log("exit");
  console.log(user, punkte)
  setHighscore(user, punkte);
  // wait for 1 second
  setTimeout(function() {
    location.reload();
    window.location.href = "index.html";
  }, 1200);
});

// Click Event Login Button
loginBtn.addEventListener("click", function() {
  let password = btoa(passwordA.value)
  // Setze einen Cookie um die Werte zu speichern und beim nächsten mal zu laden
  if (checkUser(usernameA.value, password).then(function(data) {
      console.log(data);
      if (data == true) {
        user = usernameA.value;
        setCookie("login", "true", "", "/"); // Setze den Cookie "login" auf "true"
        gameStates.pause = 1;
        loginContainer.style.display = "none";
        menu.style.display = "block";
        menuContainer.style.display = "block";
        menucontent.style.display = "block";
      } else {
        setCookie("login", "false", "", "/"); // Setze den Cookie "login" auf "true"
        console.log("Falsche Daten");
        statusLog.style.color = "red";
        statusLog.innerHTML = wrongUserAndPassword;
        setTimeout(function() {
          statusLog.style.color = "rgba(255, 255, 255, 0)";
        }, 4000);
      }
    })) {}
});

// Click Event Register Button
registerButton.addEventListener("click", function() {
  // Setze einen Cookie um die Werte zu speichern und beim nächsten mal zu laden
  console.log("Register Button Click!" + usernameR.value + email.value + passwordR.value);
  let password = btoa(passwordR.value)
  let check = false;
  if (usernameR.value == "" || email.value == "" || passwordR.value == "") {
    statusLog.innerHTML = fillAllFields;
    statusLog.style.color = "red";
    setTimeout(function() {
      statusLog.style.color = "rgba(255, 255, 255, 0)";
    }, 4000);
  } else if (checkUser(usernameR.value, password).then(function(data) {
      if (data == false) {
        check = true;
        registerUser(usernameR.value, email.value, password);
        console.log("Registrierung erfolgreich");
        statusLog.style.color = "green";
        statusLog.innerHTML = registerSuccess;
        setTimeout(function() {
          statusLog.style.color = "rgba(255, 255, 255, 0)";
        }, 4000);
      } else {
        console.log("Registrierung fehlgeschlagen");
        statusLog.style.color = "red";
        statusLog.innerHTML = userOrEmailExists;
        setTimeout(function() {
          statusLog.style.color = "rgba(255, 255, 255, 0)";
        }, 4000);
      }
    }));
});

// Füllt die Tabelle mit Highscore Daten
function addRow(name, score) {
  const row = document.createElement('tr');
  const rankCell = document.createElement('td');
  const nameCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  rankCell.textContent = table.rows.length;
  nameCell.textContent = name;
  scoreCell.textContent = score;

  row.appendChild(rankCell);
  row.appendChild(nameCell);
  row.appendChild(scoreCell);

  table.appendChild(row);
}
const highscore = document.querySelector('highscoreTable');

function sortTableByScore() {
  // Alle Zeilen von Tabelle außer Kopfzeile
  const rows = [...table.rows].slice(1);

  // Zeile auf Punkte sortieren
  rows.sort((a, b) => {
    return b.cells[2].textContent - a.cells[2].textContent;
  });

  // Lösche alle Zeilen außer Kopfzeile
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  // Überarbeite die Ranglisten Nummern
  for (let i = 0; i < rows.length; i++) {
    rows[i].cells[0].textContent = i + 1;
  }

  // Füg die sortierten Zeilen in die Tabelle
  for (const row of rows) {
    table.appendChild(row);
  }
}
sortTableByScore();

/*#############################################################################################################
 *#
 *# MySql Logic
 *#
 *#
 *#
 *#############################################################################################################
 */
async function checkUser(username, password) {
  try {
    // Sende eine asynchrone HTTP-Anfrage mit fetch
    const response = await fetch('https://www.playpacman.de/api/endpoint/rest.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${username}&password=${password}`,
    });

    // Überprüfe, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`HTTP-Error: ${response.status}`);
    }

    // Wandle das Ergebnis in Text um
    const data = await response.text();

    // Bearbeite das Ergebnis
    if (data === "Benutzer gefunden") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // Bei einem Fehler wird false zurückgegeben
    console.error(error);
    return false;
  }
}

async function registerUser(username, email, password) {
  try {
    // Sende eine asynchrone HTTP-Anfrage mit fetch
    const response = await fetch('https://www.playpacman.de/api/endpoint/registerUser.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${username}&email=${email}&password=${password}`,
    });

    // Überprüfe, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`HTTP-Error: ${response.status}`);
    }

    // Wandle das Ergebnis in Text um
    const data = await response.text();
    console.log("data: " + data + "  data");

    // Bearbeite das Ergebnis
    if (data === "Benutzer erfolgreich registriert") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // Bei einem Fehler wird false zurückgegeben
    console.error(error);
    return false;
  }
}

async function getUser() {
  try {
    // Sende eine asynchrone HTTP-Anfrage mit fetch
    const response = await fetch('https://www.playpacman.de/api/endpoint/getUsers.php', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Überprüfe, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`HTTP-Error: ${response.status}`);
    }
    text = "";

    // Wandle das Ergebnis in Text um
    const data = await response.json();
    console.log(data[1]);
    for (let i = 0; i < data[0].length; i++) {
      console.log(data[0][i], data[1][i], "TEST");

      addRow(data[1][i], data[0][i]);
      sortTableByScore();

    }
  } catch (error) {
    // Bei einem Fehler wird false zurückgegeben
    console.error(error);
    return false;
  }
}
getUser();


async function setHighscore(username, id) {
  try {
    // Sende eine asynchrone HTTP-Anfrage mit fetch
    const response = await fetch('https://www.playpacman.de/api/endpoint/setHighscore.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${username}&id=${id}`,
    });

    // Überprüfe, ob die Anfrage erfolgreich war
    if (!response.ok) {
      throw new Error(`HTTP-Error: ${response.status}`);
    }

    // Wandle das Ergebnis in Text um
    const data = await response.text();

    // Bearbeite das Ergebnis
    if (data === "ID erfolgreich überschrieben") {
      return true;
    } else {
      console.log(data);
      return false;
    }
  } catch (error) {
    // Bei einem Fehler wird false zurückgegeben
    console.error(error);
    return false;
  }
}


//*#############################################################################################################
//*#
//*#  Cookie Code
//*#
//*#
//*#############################################################################################################
function setCookie(name, value, expires, path, domain, secure) {
  var cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
  document.cookie = cookie;
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

var loginCookie = getCookie("login"); // Lade den Wert des Cookies "login"

if (loginCookie == "true") {
  // Cookie-Wert ist "true", also führe irgendwelche notwendigen Aktionen aus
  menucontent.style.display = "block";
  loginContainer.style.display = "none";
  login.style.display = "block"
  console.log("Cookie ist true");
  deleteCookie("login", "/");
}
