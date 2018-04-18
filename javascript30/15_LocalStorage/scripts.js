// 1. Select the list and the form
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


// 2. Create function


// 2.1 Function to add a new Item to the list
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

// 2.2 Function to pupulate the list
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

// 2.3 Create a function to preserve the state
function toggleDone(e) {
    if(!e.target.matches('input')) return; // skip this unliess its' an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList);
}


// 3. Create Event listeners
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);