const giftArr = [
  {title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/discount.svg"},
  {title: "Скидка 10% на всё!",
    icon: "img/discount_2.svg"},
  {title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/gift.svg"},
  {title: "Бесплатная доставка для вас!",
    icon: "img/delivery.svg"},
  {title: "Сегодня день больших скидок!",
    icon: "img/discount_3.svg"}
 ]
 const giftWindow = document.querySelector('.pop-up');
 const giftText = document.querySelector('.pop-up__text');
 const giftImg = document.querySelector('.pop-up img');
 const btnEl = document.querySelector('.pop-up__btn');

 function choiceGift () {
  const randomN = Math.floor(Math.random() * (giftArr.length + 1));
  const gift = giftArr[randomN]
  giftText.textContent = gift.title
  giftImg.src = gift.icon;
}

setTimeout(() => {
  giftWindow.style.display = "block";
  choiceGift ()
}, 1000)

btnEl.addEventListener("click", function (e) {
  giftWindow.style.display = "none";
})