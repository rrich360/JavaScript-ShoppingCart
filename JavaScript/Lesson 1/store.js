
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else ready()


function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger') //uses document object to return all elements on html that has the class,'btn-danger'
    console.log(removeCartItemButtons)
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem())
    }
    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i=0; i<addToCartButtons.length; i++){
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title,price)
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc){
    let cartRow = document.createElement('div')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartRowContents = ``
    cartItems.append(cartRow)
}

function updateCartTotal() {
let cartItemContainer = document.getElementsByClassName('cart-items')[0]
let cartRows = cartItemContainer.getElementsByClassName('cart-row')
let total = 0
    for(let i = 0; i<cartRows.length;i++){
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$',''))
       let quantity = quantityElement.value
        total =total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
