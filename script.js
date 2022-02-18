let hamburger = document.getElementsByClassName('hamburger')[0]
let navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})