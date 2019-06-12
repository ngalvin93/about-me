var myImage = document.querySelector('img');

// Image swap
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-01.jpg') {
      myImage.setAttribute ('src','images/image-02.jpg');
    } else {
      myImage.setAttribute ('src','images/image-01.jpg');
    }
}
// Change user button
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('What should I call you?');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Alvin says whaddap, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Alvin says whaddap, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }