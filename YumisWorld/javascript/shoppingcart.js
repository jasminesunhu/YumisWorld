//The shopping cart function was created with the help of this youtube video: https://www.youtube.com/watch?v=YeFzkC2awTM&ab_channel=WebDevSimplified

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

//only perform functions when DOM content is loaded
function ready() {

  var removeItemButtons = document.getElementsByClassName('btn-remove')
  for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var changeQuantityButtons = document.getElementsByClassName('cart-quantity')
  for (var i = 0; i < changeQuantityButtons.length; i++) {
    var button = changeQuantityButtons[i]
    button.addEventListener('click', changeQuantity)
  }

  var addToCartButtons = document.getElementsByClassName('add-to-cart-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCart)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', checkoutClicked)
}

//removes item from shopping cart
function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

//changes quantity in cart and prevents invalid quantity inputs
function changeQuantity(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) { //prevents negative or 0 of an item in cart quantity
    input.value = 1
  }
  updateCartTotal()
}

//adds items to cart
function addToCart(event){
  var button = event.target
  var shopItem = button.parentElement
  //retrieve item details
  var title = shopItem.getElementsByClassName('item-title')[0].innerText
  var price = shopItem.getElementsByClassName('item-price')[0].innerText
  var image = shopItem.getElementsByClassName('item-image')[0].src
  addItemToCart(title, price, image)
}


function addItemToCart(title, price, image) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('shopping-cart')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
  for (var i = 0; i < cartItemNames.length; i++) {
      //checks if the item is already in user's cart
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  //html for each item in the shopping cart
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${image}" width="100" height="100">
          <span class="cart-item-name">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-remove" type="button">Delete</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', changeQuantity)
}

function checkoutClicked() {
  window.location.href= '/html/checkout.html'
}

//updating cart price
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$', '')) //convert price to number
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100 //to combat rounding errors
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total //updates total price
}
