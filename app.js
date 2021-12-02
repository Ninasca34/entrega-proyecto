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
 
 
// Segunda Sección: Selección del talle de la remera y cantidad  

const myFunction = (event) => {
    const clickedElem = event.target
    const allBtns = document.querySelectorAll('.btn-size')
    allBtns.forEach(btn => btn.classList.remove("btn-size-active"))
    clickedElem.classList.add("btn-size-active")
  }

  const submit = () => {
    const selectedText = document.querySelector(".addToCart-active") ? document.querySelector(".addToCart-active").innerHTMl : 'click'
    console.log(selectedText)
  }


// Carrito de compra:
// valido que seleccionó el talle y guardo validacion en variable
// valido que el valor sea > 0 y guardo validacion en variable

// chequeo que tanto el talle como la cantidad cumplan con las
// condiciones anteriores
// de ser asi, continuar con el procedimiento


//una vez se completa el talle y la cantidad, se habilita y se muestra el popup
$('.addToCart').on("click", function(){
    $.pgwModal({
        target: '#modalContent',
        title: 'Modal title 2',
        maxWidth: 400
    });
});


// calculo final




















