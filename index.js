main.remove(main);
let newHeader = document.createElement('h1');
console.log(newHeader);
newHeader.setAttribute('id','victory');
let textNode = document.createTextNode('YOUR-NAME is the champion');

newHeader.appendChild(textNode);

let containerDiv = document.querySelector('.container');
containerDiv.appendChild(divElement);