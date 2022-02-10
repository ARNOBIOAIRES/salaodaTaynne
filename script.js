const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

/* 
dentro do toggle tem 2 elementos 
agrupamento de dados

dentro do for para elemento of toggle faz isso
ele criar uma constante elment
e faz alguma coisa
o element dentro dessa estrutura passa a ser um objeto
para cada elemento fará
o mapeamento da DOM  é transformar tudo em objeto.

*/

for(const element of toggle) {
 element.addEventListener('click', () => {
   nav.classList.toggle('show')
 })

}

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando tiver scroll */




function changeHeaderWhenScroll () {
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

if(window.scrollY >= navHeight) {
  header.classList.add('scroll')
  // scrrol é maior que a altura do header
} else {
// menor que a altura do header
header.classList.remove('scroll')

}
}


/*  Testemonials com o carrossel/slider swiper */


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination' 
  },
  mousewheel: true,
  keyboard: true
})

/*  codigo do scroll reveil

*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
})

scrollReveal.reveal(`
 #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, { interval: 100}
)


/* 
button to scroll up
*/




function backToTop () {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }

}


window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  
})
