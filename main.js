var welcomeBox = document.querySelector('div.welcome-box');
var button = document.querySelector('.close-icon');

button.addEventListener('click', removeWelcome)

function removeWelcome(){
welcomeBox.remove();
// welcomeBox.style.display = 'none';
}
