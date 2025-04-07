let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['Тарелка', 'Кружка', 'Ракета', 'Марсоход']
for (let i = 0; i < item_name_objects.length; i += 1) {
    item_name_objects[i].innerHTML = item_names[i]
}

let item_desc_objects = document.querySelectorAll('.merch-item-descr')
let item_desc = [
    'Тарелка с принтом Марса. Доступна в красном и белом цветах',
    'Кружка с принтом Марса. Доступа в красном и белом цветах',
    'Масштабная модель одной из ракет Galaxy',
    'Масштабная модель масохода (мы покупаем их у NASA)']
for (let i = 0; i < item_desc_objects.length; i += 1) {
    item_desc_objects[i].innerHTML = item_desc[i]
}

let item_price_objects = document.querySelectorAll('.merch-item-price')
let item_prices = ['1000', '1000', '2500', '5000']
for (let i = 0; i < item_price_objects.length; i += 1) {
    item_price_objects[i].innerHTML = item_prices[i]
}

let buy_btn = document.querySelectorAll('.add-to-cart-btn')
let cart = document.querySelector('.cart-amount')
let cart_sum = document.querySelector('.cart-text')
cart_sum.innerHTML = +0
for (let i = 0; i < buy_btn.length; i+=1) {
    buy_btn[i].addEventListener('click', function(){
        cart.innerHTML = +cart.innerHTML + 1
        cart_sum.innerHTML = +cart_sum.innerHTML + +item_prices[i]
    })
}


















// Код, который меняет тему
function change_theme() {
   let header = document.querySelector('header')
   if (current_background == 'url(/uploads/2022/11/bg_space.png)') {
       current_background = 'url(/uploads/2022/11/bg_mars.png)'
   } else {
       current_background = 'url(/uploads/2022/11/bg_space.png)'
   }
   header.style.background = current_background
   header.style.backgroundSize = 'cover'
}
 
let change_theme_button = document.querySelector('.switch-theme-button')
let current_background = 'url(/uploads/2022/11/bg_mars.png)'
change_theme_button.addEventListener('click', change_theme)
 

// Подсчет стоимости билета
function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = +document.querySelector('.submit-select').value
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)


// Красивая кнопка 'Отправить'
function make_transparent() {
    send_btn.style.backgroundColor = 'transparent'
}
 
function make_colorful() {
    send_btn.style.backgroundColor = '#C2AB99'
}

let send_btn = document.querySelector('.submit-btn-send')

send_btn.addEventListener('mouseenter', make_transparent)
send_btn.addEventListener('mouseleave', make_colorful)

// Пасхалка
function easter_egg() {
    let mars1 = document.querySelector('.mars1')
    let mars2 = document.querySelector('.mars2')
    let mars3 = document.querySelector('.mars3')
    let mars4 = document.querySelector('.mars4')
    let mars5 = document.querySelector('.mars5')
    mars1.style.color = '#AD4851'
    mars2.style.color = '#AD4851'
    mars3.style.color = '#AD4851'
    mars4.style.color = '#AD4851'
    mars5.style.color = '#AD4851'
}
 
let mars = document.querySelector('.mars1')
mars.addEventListener('click', easter_egg)
