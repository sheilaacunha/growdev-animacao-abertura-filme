

const modal = document.getElementById('dv-modal')
const openMovieButton = document.getElementById('movie-button')
const closeMovieButton = document.getElementById('close-button')


function openModal() {
    modalDefaultBehavior = true

    if (modalDefaultBehavior) {
        modal.style.display = 'flex'
    }
}

function closeModal() {
    modalDefaultBehavior = false

    if (!modalDefaultBehavior) {
        modal.style.display = 'none'
    }
}

openMovieButton.addEventListener('click', openModal)
closeMovieButton.addEventListener('click', closeModal)


function myFunction() {
    document.querySelector(".divSister").style.opacity = "0.1";
  }


