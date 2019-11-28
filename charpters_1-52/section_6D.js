const content = document.querySelectorAll(`p`);

content.forEach(x => {
    if (x.textContent.includes(`success`)){
        x.classList.add(`success`);
    }
    else if(x.innerText.includes(`error`)){
        x.classList.add(`error`);
    }
});

const title = document.querySelector(`.title`);

title.classList.toggle(`test`);
title.classList.toggle(`test`);


/*
console.log(content.classList);
content.classList.add(`rero1`);
content.classList.add(`rero2`);
content.classList.replace(`success`, `rero`);
content.classList.remove(`rero2`);
*/
