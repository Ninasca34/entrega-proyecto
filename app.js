//Section 1

let imageSelected = false;
let URL = "./images.json";


//Ajax call
/*
$.ajax({
    method: "GET",
    url: URL,
    dataType: "JSON",
}).done((response) => {
    
    response.forEach((image) => {
        $("#carouImage").append(
            `<div class="item">
                <img class="img-carousel" src="${image.src}" alt="${image.alt}"/>
            </div>`
        );
    });
    document.querySelectorAll(".img-carousel").forEach((item) => {
        item.addEventListener("click", (event) => {
          imageSelected = true;  
          const image = event.target.getAttribute("alt");
          const src = event.target.getAttribute("src")
          console.log("You have selected the image: " + image)
          console.log(src)
          const tshirt = document.querySelector(".tshirt-selected");
          const tshirtCart = document.querySelector(".tshirt-selected-cart");
          setImageToTshirt(tshirt, src);
          setImageToTshirt(tshirtCart, src);
    
        });
    });
});
*/

//Selección de una imágen del carousel 

document.querySelectorAll(".img-carousel").forEach((item) => {
    item.addEventListener("click", (event) => {
      imageSelected = true;  
      const image = event.target.getAttribute("alt");
      const src = event.target.getAttribute("src")
      console.log("You have selected the image: " + image)
      console.log(src)
      const tshirt = document.querySelector(".tshirt-selected");
      const tshirtCart = document.querySelector(".tshirt-selected-cart");
      setImageToTshirt(tshirt, src);
      setImageToTshirt(tshirtCart, src);

    });
});

 //Presentación de la imagen seleccionada impresa en la remera

 function setImageToTshirt(element, src){
    element.setAttribute("src", src)
 }

 //Una vez seleccionada la imágen, se realiza una validación

 let button = document.getElementById("btnPrincipal")
 button.addEventListener("click", respuestaClick)
 function respuestaClick(){
     if (imageSelected == true) {
        let section2 = $(".container-2");
        section2.show();
        $('html,body').animate({
            scrollTop: section2.offset().top
            },1000
        );
        
        $('.message-errorContinue p').addClass('message-hidden')

    } else {
        $('.message-errorContinue p').removeClass('message-hidden') 
    } 
 }
 

//Section 2
//Selección del talle de la remera y la cantidad del producto  

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


//add to cart:
//una vez se completó el talle y la cantidad, se habilita y se muestra el popUp
//cálculo final: cálculo del total según cantidad

$('.addToCart').on("click", function(){
    //jQuery 
    //Talle
    let buttonSizeSelected = $('.btn-size-active').val();
    let buttonQtySelected = $('.calc').val();
    let sizeSelected;
    let qtySelected;
    let price = 890;
    let total = 0;

    if(typeof(buttonSizeSelected) !== 'undefined' && buttonSizeSelected !=='' ){
        sizeSelected = true;
    } else {
        $('.message-errorSize').removeClass('message-hidden');
        sizeSelected = false;
    }
    
    if(typeof(buttonQtySelected) !== 'undefined' && buttonQtySelected !== ''){
        qtySelected = true;
    } else {
        $('.message-errorQuantity').removeClass('message-hidden');
        qtySelected = false;
    }

    if(sizeSelected && qtySelected){
        total = buttonQtySelected * price
        
        document.getElementById("total").innerHTML = "Total a pagar: $" + total;

        $.pgwModal({
            target: '#modalContent',
            maxWidth: 400
        });
    } 

    $(".payment-btn").click(function(){
        $(".container-form").show();
    });
});




//botón pagar y form

/*  $('.payment').show('container-form');  */



































