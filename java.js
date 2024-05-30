const plus=document.querySelectorAll(".fas.fa-plus-circle");
const minus=document.querySelectorAll(".fas.fa-minus-circle");
const deletee=document.querySelectorAll(".fas.fa-trash-alt");
const like=document.querySelectorAll(".fas.fa-heart");

function Quantity(product,increment){
    const quantityElem=product.parentElement.querySelector(".quantity");
    let quantity=parseInt(quantityElem.textContent);
    if (increment){
        quantity++;
    }
    else{
        if(quantity>0){
            quantity--;
        }
    }
    quantityElem.textContent=quantity;
}
plus.forEach(button=>{
    button.addEventListener('click',()=>{
        Quantity(button,true);
    })
});

minus.forEach(button=>{
    button.addEventListener('click',()=>{
        Quantity(button,false);
    })
});
function removeProduct(button){
    const productElem=button.closest(".card-body");
    if(productElem){
        productElem.remove();
    }
}
deletee.forEach(button=>{
    button.addEventListener('click',()=>{
        removeProduct(button);
    })
});
function likeProduct(button){
    button.style.color='red';
}

like.forEach(button=>{
    button.addEventListener('click',()=>{
        likeProduct(button);
    })
});
function Totalprice(product) {
    const priceElem = product.parentElement.querySelector(".unit-price");
    const totalPriceElem = product.parentElement.querySelector(".total");
    const unitPrice = parseFloat(priceElem.textContent);
    const quantity = getQuantityForProduct(product); 
  
    if (quantity) {
      const totalPrice = unitPrice * quantity;
      totalPriceElem.textContent = totalPrice.toFixed(2);
    }
  }