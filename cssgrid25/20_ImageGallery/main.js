// 1. Select the elements of the DOM
const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');


// 2. Add function

// 2.1 Generate html function

function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
            <img src="images/${randomNumber(12)}.jpg">
            <div class="item__overlay">
                <button>View →</button>
            </div>
        </div>
    `;
}

// 2.2 Helper function for randomNumbers
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

// 3. Generate an array with random numbers

const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4)
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]);


// 4. Function for the gallery item to assign the source to overlayImage
function handleClick(e) {
    // console.log(e.currentTarget);
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src =  src;
    overlay.classList.add('open');
}

// 5. Function to close an image

function close() {
    overlay.classList.remove('open');
}
// 6. Add html to the dom element of gallery
const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

// 7. Select all of the created items and add an event
const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleClick));

// 8. Add Evemt listener to a button to close the image
overlayClose.addEventListener('click', close);

