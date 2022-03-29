const navElement = document.querySelector('nav'),
      freeCourseElement = document.querySelector('.free__course'),
      hamburgerElement = document.querySelector('.fa-regular');

hamburgerElement.addEventListener('click', ()=>{
  navElement.classList.toggle('show')
  freeCourseElement.classList.toggle('show')
})
window.addEventListener("scroll", ()=>{
  navElement.classList.remove('show')
  freeCourseElement.classList.remove('show')
})

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Toggle Price HTML

let btn = document.querySelector("#btn")

function leftClick (){
  btn.style.left = "0"
}
function rightClick (){
  btn.style.left = "120px"
}
