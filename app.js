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
      const tshirtCart = document.querySelector(".tshirt-selected-cart");
      setImageToTshirt(tshirt, src);
      setImageToTshirt(tshirtCart, src);

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
        console.log("Following");
     } else {
        console.log("Please select an image to advance with the order");
     }      
 }
 

// Segunda Sección: Selección del talle de la remera y cantidad  

const sizeSelector = (event) => {
    const clickedElem = event.target
    const allBtns = document.querySelectorAll('.btn-size')
    allBtns.forEach(btn => btn.classList.remove("btn-size-active"))
    clickedElem.classList.add("btn-size-active")
  }

  
const submit = () => {
    const selectedText = document.querySelector(".addToCart-active") ? document.querySelector(".addToCart-active").innerHTMl : 'click'
    console.log(selectedText)
  }

$('.btn-size').click(function(){
    $('.message-errorSize').addClass('message-hidden');
});

$('.calc').click(function(){
    $('.message-errorQuantity').addClass('message-hidden');
});
// add to cart:
//una vez se completó el talle y la cantidad, se habilita y se muestra el popup
$('.addToCart').on("click", function(){
    //Jquery 
    //Talle
 
    let sizeSelected = $('.btn-size-active').val();
    let qtySelected = $('.calc').val();
    let popUp = false;

    if(typeof(sizeSelected) !== 'undefined' && sizeSelected !=='' ){
        popUp = true;
    } else {
        $('.message-errorSize').removeClass('message-hidden');
        popUp = false;
    }
    
    if(typeof(qtySelected) !== 'undefined' && qtySelected !== ''){
        popUp = true;
    } else {
        $('.message-errorQuantity').removeClass('message-hidden');
        popUp = false;
    }


    if(popUp == true){
        $.pgwModal({
            target: '#modalContent',
            maxWidth: 400
        });
    } 
    

});


//checkout
//magia del pop
//mostrar remera
//calcular total segun cantidad
//boton de pagar

// calculo final




















