const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);

'use strict';

const template = document.getElementById('template');

document.body.appendChild(
  document.importNode(template.content, true)
);

const button = document.getElementById('click-me');
button.addEventListener('click', event => alert(event));