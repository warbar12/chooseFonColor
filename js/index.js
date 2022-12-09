// слайдер
const slides = document.querySelectorAll('.slide')

for (const slide of slides){
  slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
  })
}

function clearActiveClasses(){
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

// табс для слайдера  

const tabs = document.querySelector(".tabs-link")
const link = [...tabs.children]

const allSlider = document.querySelector('.our-work-slider')
const activeSlider = [...allSlider.children]

activeSlider.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`)
});

link.forEach((item, index) => {
  item.setAttribute("data-set",`${index}`)
})

tabs.addEventListener('click', event =>{
  if(event.target !== tabs){
    link.forEach(element =>{
      element.classList.remove('active')
    })
  }
  activeSlider.forEach(item => {
    if(item.dataset.set === event.target.dataset.set){
      item.classList.add("active")
    }else{
      item.classList.remove('active')
    }
  });
  event.target.classList.toggle('active')
})

// форма 

const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container-2");


document.getElementById("signIn").addEventListener("click", () => {
  container.classList.remove('right-panel-active')
});
document.getElementById("signUp").addEventListener("click", () => {
  container.classList.add('right-panel-active')
});


firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

