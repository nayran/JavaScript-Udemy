const find = document.querySelector(`div.error`);
console.log(find);

const first = document.querySelector(`body > h1`);
console.log(first);

const all = document.querySelectorAll(`p`);
all.forEach(all => {
    console.log(`forEach all: ${all}`);
});
console.log(`all: ${all}`);
console.log(`all[1]: ${all[1]}`);

const errors = document.querySelectorAll(`.error`);
console.log(errors);

// parte 2

const x = document.getElementById(`japao`);
console.log(x);

const y = document.getElementsByClassName(`error`);
console.log(y);
console.log(y[0]);

const z = document.getElementsByTagName(`p`);
console.log(z);
console.log(z[1]);
