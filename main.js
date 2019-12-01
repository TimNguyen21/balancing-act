// ***Remove Welcome Button***

var welcomeBox = document.querySelector('.welcome-box');
var button = document.querySelector('.close-icon');

button.addEventListener('click', removeWelcome);

function removeWelcome(){
welcomeBox.remove();
// welcomeBox.style.display = 'none';
}
// ***Remove Welcome Button***

// ***Dashboard Icon Navigation***
var homeColumn1 = document.querySelector('.home-column1');
var homeColumn2 = document.querySelector('.home-column2');
var transColumn1 = document.querySelector('.transaction-column1')
var transColumn2 = document.querySelector('.trans-column2')
var dashButton = document.querySelector('.dashboard-icon');
var transButton = document.querySelector('.transactions-icon')

transButton.addEventListener('click', changeToTransactionPage);

function changeToTransactionPage(){
  homeColumn1.style.visibility = 'hidden';
  homeColumn2.style.visibility = 'hidden';
  dashButton.style.border = 'none';
  transButton.style.borderLeft =  '4px solid #1CA3BA';
  transColumn1.style.visibility = 'visible';
  transColumn2.style.visibility = 'visible';
}

dashButton.addEventListener('click', changeToDashboard);

function changeToDashboard(){
  transColumn1.style.visibility = 'hidden';
  transColumn2.style.visibility = 'hidden';
  dashButton.style.borderLeft = '4px solid #1CA3BA';
  transButton.style.borderLeft =  'none';
  homeColumn1.style.visibility = 'visible';
  homeColumn2.style.visibility = 'visible';
}
// ***Dashboard Icon Navigation***
