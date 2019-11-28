const button = document.querySelector(`button`);

// button.addEventListener(`click`, () => {
//     console.log(`you clicked`);
// });

const ul = document.querySelector(`ul`);

// const items = document.querySelectorAll(`li`);

// items.forEach(item => {
//     item.addEventListener(`click`, x => {
//         console.log(`LI event`, x.target);
//         x.stopPropagation();
//         // x.target.style.textDecoration = `line-through`;
//         x.target.remove();
//     });
// });

button.addEventListener(`click`, () => {
    // ul.innerHTML += `<li>one more event</li>`;
    const li = document.createElement(`li`);
    li.textContent = `one more`;
    ul.append(li);
    // ul.prepend(li);
});

ul.addEventListener(`click`, x => {
    if(x.target.tagName === `LI`){
        x.target.remove();
    }
});