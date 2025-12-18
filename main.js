/* Die Funktion changeDunkel wird verwendet, um die Farben der Hauptseite in eine dunkle Version zu ändern. Dies passiert über die Änderung der 4 Variablen für die 1.-,2.-, Hintergrund- und Schriftfarbe */
function changeDunkel() {
  document.documentElement.style.setProperty("--primary", "blue");
  document.documentElement.style.setProperty("--secondary", "darkblue");
  document.documentElement.style.setProperty("--background", "black");
  document.documentElement.style.setProperty("--fontColor", "white");
}

/* Die Funktion changeHell wird verwendet, um die Farben der Hauptseite wieder auf die helle Version zu ändern. Dies passiert über die Änderung der 4 Variablen für die 1.-,2.-, Hintergrund- und Schriftfarbe */
function changeHell() {
  document.documentElement.style.setProperty("--primary", "mintcream");
  document.documentElement.style.setProperty("--secondary", "lightblue");
  document.documentElement.style.setProperty("--background", "white");
  document.documentElement.style.setProperty("--fontColor", "black");
}
