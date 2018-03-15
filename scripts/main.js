function setImage(image, num) {
	image.setAttribute('src',imgs[num]);
	image.setAttribute('imageNum',num);
}

function slider() {
	var currentImage;
	currentImage = this.getAttribute('imageNum');
	currentImage = (currentImage+1) % imgs.length;
	setImage(this,currentImage);
}

var imgs = [
  'images/siteflower.png'
  ,'images/siteflower.jpg'
  ,'images/flower2.jpg'
];

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; ++i)
{
    setImage(images[i], 0);
    images[i].onclick = slider;

}

var myButton = document.querySelector('#changeUserbutton');
var myHeading = document.querySelector('h2:last-of-type');

function setUserName() {
	var myName = prompt('Как Вас зовут?');
	localStorage.setItem('name', myName);
//	myHeading.innerHTML = 'Привет, ' + myName;
}

myButton.onclick = function() {
	setUserName();
	renderName();
}

/*
if (!localStorage.getItem('name')) {
	setUserName();
} 
*/

renderName();

function renderName() {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Привет, ' + storedName;
}
//myHeading.textContent = 'Привет';