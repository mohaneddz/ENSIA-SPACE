const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

// sensitivity
const sfront = 150;
const sback = 400;

//catching movement
parallax.addEventListener('mousemove', e => {

    const x = e.clientX;
    const y = e.clientY;

// MOVE!
front.style.transform = `
    translate(
        ${x / sfront}%,
        ${y / sfront}%
    )`;

back.style.transform = `
    translate(
        ${x / sback}%,
        ${y / sback}%
    )`;

});
