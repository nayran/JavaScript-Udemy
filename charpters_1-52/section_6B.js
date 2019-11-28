const x = document.querySelector(`p`);
console.log(x.innerText);
x.innerText += ` MOTLEY`;
console.log(x.innerText);

const y = document.querySelectorAll(`p`);
y.forEach(x => {
    console.log(x.innerText);
    x.innerText += ` new`;
});

const z = document.querySelector(`.content`);
console.log(z.innerHTML);
z.innerHTML = `<h4>tchau</h4>`;
console.log(z.innerHTML);

const k = [`nayran`, `ziebell`];
k.forEach(name =>{
    z.innerHTML += `<p>${name}</p>`;
});