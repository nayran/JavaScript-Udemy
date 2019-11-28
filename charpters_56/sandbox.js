const copy = document.querySelector(`.copy-me`);

copy.addEventListener(`copy`, () => {
    console.log(`no copies please`);
});

const box = document.querySelector(`.box`);

box.addEventListener(`mousemove`, k => {
    box.textContent = `x: ${k.offsetX} y: ${k.offsetY}`;
});

document.addEventListener(`wheel`, x => {
    console.log(x.pageX, x.pageY);
});
