// Write your code here!
const idElement = document.getElementById('main');
idElement.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
const body1 = document.querySelector('body');
body1.appendChild(newHeader);
document.getElementsByTagName('h1')[0].textContent='Kahuro is the champion';