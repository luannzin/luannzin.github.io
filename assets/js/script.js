const intro = document.querySelector('.intro');
const distanceScroll = document.querySelectorAll('.p_content p');
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  if (pageYOffset > 500) {
    distanceScroll.forEach((p) => {
      const scrollTop = p.getBoundingClientRect().top - windowMetade;

      console.log(scrollTop);

      if (scrollTop < 50) {
        p.classList.add('ativo');
      }
    });
  }
}

window.addEventListener('scroll', animaScroll);

window.addEventListener('scroll', () => {
  if (pageYOffset > 0) {
    intro.classList.add('ativo');
  } else if (pageYOffset <= 0) {
    intro.classList.remove('ativo');
  }
});
