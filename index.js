const allProducts = document.querySelector(".Shop-button");
const send = document.querySelector(".Sub-button");


allProducts.addEventListener('click', function(){
    allProducts.classList.add("products");
});

send.addEventListener("click", function(){
    alert('Form submitted');
});