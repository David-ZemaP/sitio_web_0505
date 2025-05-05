let fondoRojo = false;

function cambiarColor() {
  if (fondoRojo) {
    
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "red";
  }
  fondoRojo = !fondoRojo;
}