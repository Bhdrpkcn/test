var removeCartItemButtons =  document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
//Silinecek item sayısını tespit amacıyla for loop döndür; Event Listener ile parent ile btn-danger in parentlerini dahil ederek tamamını sil.
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target //Buradaki target Click lediğin button u algılıyor.
        buttonClicked.parentElement.parentElement.remove() 
        updateCartTotal()
    })
}

//sorun
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-rpice')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = priceElement.innerText
        console.log(price)
    }
}

