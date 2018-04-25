// 1. Select all of the links on a page
const triggers = document.querySelectorAll('a');
// 2. Create a span with a class and add it to the documents DOM
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);


// 3. Create a function
function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// 4. Add an EventListener to the function
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));