const link = document.querySelector(`a`);
link.setAttribute(`href`, `https://www.google.com`);
link.innerText = `Google`;

const msg = document.querySelector(`p`);
console.log(msg.getAttribute(`class`));
msg.setAttribute(`class`, `newclass`);
console.log(msg.getAttribute(`class`));
msg.setAttribute(`style`, `color: blue`);

const nay = document.querySelector(`h1`);
nay.setAttribute(`style`, `margin: 50px`);
nay.style.color = `blue`;
nay.style.marginTop = `50px`;
nay.style.marginRight = `436px`;
nay.style.fontSize = `42px`;
nay.style.backgroundColor = `orange`;