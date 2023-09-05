function changeColor() {
  var colors = [
    "green",
    "yellow",
    "red",
    "blue",
    "orange",
    "grey",
    "salmon",
    "tomato",
    "lightblue",
    "black",
    "sienna",
    "darkred",
  ];
  var rnd = Math.floor(Math.random() * colors.length);
  document.getElementById("elemntq5").style.backgroundColor = colors[rnd];
}
document.getElementById("elemntq5").addEventListener("click", changeColor);
