var myVar;

function LoadOff() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementByClassName("page")[0].style.display = "block";
}