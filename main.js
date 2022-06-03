/* Back to top show */
const backToTopButton = document.querySelector('.back-to-top')

function showButtonToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  showButtonToTop()
})
