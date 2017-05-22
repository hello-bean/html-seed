// Javascript goes here

var numButtons = 0;

var addDiv = document.getElementById('buttonAdd');

var superButton = document.getElementById('superButton');
superButton.addEventListener('click', superButtonClicked);

function superButtonClicked() {
  console.log('Button clicked');
  
  //var addDiv = document.getElementById('buttonAdd');
  var newButton = document.createElement('button');

  newButton.innerHTML = superButton.innerHTML;
  
  addDiv.appendChild(newButton);
  
  newButton.addEventListener('click', superButtonClicked);

  numButtons ++;
}


var evilButton = document.getElementById('evilButton');
evilButton.addEventListener('click', evilButtonClicked);

function evilButtonClicked() {
	console.log('Evil Button clicked');

	var tobeRemoved = addDiv;

	tobeRemoved.parentNode.removeChild(tobeRemoved[numButtons]);


}

