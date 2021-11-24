//Primera Sección 
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

 // Una vez seleccionada la imágen, se realiza una validación

 let boton = document.getElementById("btnPrincipal")
 boton.addEventListener("click", respuestaClick)
 function respuestaClick(){
     if (imagenSeleccionada == true) {
        console.log("Siguiente");
     } else {
        console.log("Por favor seleccione una imágen para avanzar con el pedido");
     }      
 }
 
 


//Segunda Sección: Se ingresa un texto, el cual se imprimirá en la remera


let input = document.querySelector("textarea");
let textarea = document.getElementsByTagName("textarea")[0];
input.addEventListener('click', () => {
    console.log("Usted ha ingresado el siguiente texto: ");
    
});

function send() {
    console.log(textarea.value);
}














 //Una vez impreso el texto en la remera, se continúa a la siguiente sección 