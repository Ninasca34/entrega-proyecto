// Selección de una imágen del carousel 
document.querySelectorAll(".img-carousel").forEach((item) => {
    item.addEventListener("click", (event) => {
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