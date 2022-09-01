const body = document.body;
var plusAmount = document.getElementById('increase')
var minusAmount = document.getElementById('decrease')
var amount = document.getElementById('amount')
function addAmount() {
    let newAmount = Number(amount.innerHTML) + 1
    amount.innerHTML = newAmount
}
function subtractAmount() {
    let newAmount = Number(amount.innerHTML) - 1
    if(newAmount<=0) {
        amount.innerHTML = 1
    }else{
        amount.innerHTML = newAmount
    }
}
plusAmount.addEventListener('click', addAmount)
minusAmount.addEventListener('click',subtractAmount)


var mainImage = document.getElementById("product-image")
function selectImg () {
    var activeImg = document.querySelector(".active")
    activeImg.classList.remove("active")
    mainImage.src = this.src
    this.classList.add("active")
}

var images = document.querySelector(".other-images").getElementsByTagName("img")
for(let i=0; i<images.length;i++) {
    var img = images[i]
    img.addEventListener("click",selectImg)
}
const cartElm = document.querySelector(".cart")
var cartIcon = document.querySelector(".cart-icon")
var addToCart = document.querySelector("#add-cart")
const cartBox = document.querySelector(".cart-box")
const cartItem = document.querySelector(".cart-item")
const cartProduct = document.querySelector(".cart-product")
const itemDetails = document.querySelector(".item-details")
const itemPrice = document.querySelector(".item-price")
const checkout = document.querySelector(".checkout")
const emptyCart = document.querySelector(".empty-cart")
addToCart.addEventListener("click",()=>{
    cartIcon.style.setProperty("--cart-display", "inline-block")
    cartIcon.setAttribute("data-amount", amount.innerHTML)
})
cartIcon.addEventListener("click",()=>{
    if(!cartIcon.getAttribute("data-amount")) {
        cartBox.style.display = "block"
        cartItem.style.display = "none"
        checkout.style.display = "none"
        emptyCart.style.display = "block"
    } else {
        const itemAmount = document.querySelector('.item-amount')
        const totalPrice = document.querySelector('.total-price')
        itemAmount.innerHTML = 'x'+amount.innerHTML
        totalPrice.innerHTML = '$'+Number(amount.innerHTML) * 125
        cartBox.style.display = "block"
        cartItem.style.display = "flex"
        checkout.style.display = "block"
        emptyCart.style.display = "none"
    }
})

body.addEventListener("click",(e)=>{
    console.log(e.target.parentNode)
    console.log(e.target)
    if(e.target.parentNode!==cartBox&&
        e.target.parentNode!==cartElm&&
        e.target.parentNode!==cartItem&&
        e.target.parentNode!==cartProduct&&
        e.target.parentNode!==itemDetails&&
        e.target.parentNode!==itemPrice) {
        cartBox.style.display = "none"
    }
})


const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeIcon = document.querySelector(".close")
const links = document.querySelector(".links")
const overlay = document.querySelector(".overlay")
hamburgerMenu.addEventListener("click", ()=>{
    links.classList.add("sm-view")
    overlay.style.display = "block"
    closeIcon.style.display = "block"
})
closeIcon.addEventListener("click", ()=>{
    links.classList.remove("sm-view")
    overlay.style.display = "none"
    closeIcon.style.display = "none"
})
