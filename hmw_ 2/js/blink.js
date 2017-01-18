function blink() {
  document.getElementById('blinkingText').innerHTML = "";
  setTimeout("appear()",100);
}
function appear() {
  document.getElementById('blinkingText').innerHTML = "please load console";
  setTimeout("blink()",100);
}
