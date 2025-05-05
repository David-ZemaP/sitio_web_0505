function cambiarOrden() {
    let contenedor = document.getElementById("flexContainer");
    let cajas = contenedor.children;
    let cajasArray = Array.from(cajas).reverse();
  
    contenedor.innerHTML = ""; // Borra las cajas
    for (let caja of cajasArray) {
      contenedor.appendChild(caja); // Agrega en orden invertido
    }
  }