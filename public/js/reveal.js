window.addEventListener('scroll', reveal)

function reveal() {
  let reveals = document.querySelectorAll('.reveal, .reveal-custom')
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight
    let revealtop = reveals[i].getBoundingClientRect().top
    let rp = reveals[i].dataset.reveal
    let revealpoint = rp || 150
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active')
    }
    else {
      reveals[i].classList.remove('active')
    }
  }
}