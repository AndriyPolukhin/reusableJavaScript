const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {

    // 1. Bubbling! Indicates all of the parent div's
    console.log(this.classList.value);

    // 2. StopPropagation: just fire the exact event
    // e.stopPropagation(); // stop Bubbling!
    // console.log(this);
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true // Run the event only once
}));


// You can press this button only once
button.addEventListener('click', () => {
    console.log("click!");
}, {
    once: true
})