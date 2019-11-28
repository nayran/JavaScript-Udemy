const y = document.querySelector(`.z`);

let x = [`nayran`, `ziebell`];

let html = ``;

x.forEach(function(person)
{
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
y.innerHTML = html;