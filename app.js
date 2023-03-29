


function toggleNav() {
  var nav = document.querySelector('.side-bar');
  nav.classList.toggle('active');
}

function removeNav() {
  var nav = document.querySelector('.side-bar');
  nav.classList.remove('active');
}

var button = document.querySelector('.toggle-sidebar');
button.addEventListener('click', toggleNav);

var button = document.querySelector('.side-close');
button.addEventListener('click', removeNav);
