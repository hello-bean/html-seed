// Javascript goes here

var numButtons = 0;

var addDiv = document.getElementById('buttonAdd');

var superButton = document.getElementById('superButton');
superButton.addEventListener('click', superButtonClicked);

//should make newButton usable in the delete function ?
var newButton;

function superButtonClicked() {
  console.log('Button clicked');
  
  var addDiv = document.getElementById('buttonAdd');
  newButton = document.createElement('button');

  newButton.innerHTML = superButton.innerHTML;
  
  addDiv.appendChild(newButton);
  
  newButton.addEventListener('click', superButtonClicked);

  numButtons ++;
}


var evilButton = document.getElementById('evilButton');
evilButton.addEventListener('click', evilButtonClicked);

function evilButtonClicked() {
	console.log('Evil Button clicked');


	newButton.parentNode.removeChild('superButton');


}

