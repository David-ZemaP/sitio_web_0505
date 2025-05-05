function cambiarOrden() {
    let contenedor = document.getElementById("flexContainer");
    let cajas = contenedor.children;
    let cajasArray = Array.from(cajas).reverse();
  
    contenedor.innerHTML = ""; 
    for (let caja of cajasArray) {
      contenedor.appendChild(caja); 
    }
  }