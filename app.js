let imagenSeleccionada = false;

// Selección de una imágen del carousel 
document.querySelectorAll(".img-carousel").forEach((item) => {
    item.addEventListener("click", (event) => {
      imagenSeleccionada = true;  
      const image = event.target.getAttribute("alt");
      const src = event.target.getAttribute("src")
      console.log("Usted ha seleccionado la imagen: " + image)
      console.log(src)
      const tshirt = document.querySelector(".tshirt-selected");
      setImageToTshirt(tshirt, src);

    });
  });

 // Presentación de la imagen seleccionada impresa en la remera


 function setImageToTshirt(element, src){
    element.setAttribute("src", src)
 }

 // Una vez seleccionada la imágen, realiza validación

 let boton = document.getElementById("btnPrincipal")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(){
     if (imagenSeleccionada == true) {
        console.log("Siguiente");
     } else {
        console.log("Por favor seleccione una imágen para avanzar en el pedido");
     }    
 }
 
 




/*
 document.querySelector("").for((item) => {
    item.addEventListener("click", (event) => {
      const text = event.target.getAttribute("alt");
      const src = event.target.getAttribute("src")
      console.log("Usted ha seleccionado agregar el siguiente texto: " + texto)
      console.log(src)
      const tshirt = document.querySelector(".tshirt-selected");
      setImageToTshirt(tshirt, src);
      
    });
  });

 function setImageToTshirt(element, src){
    element.setAttribute("src", src)
 }

 */
