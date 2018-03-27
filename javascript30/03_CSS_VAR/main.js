// 1. Select all of the input fields
const inputs = document.querySelectorAll('.controls input');

// 2. Create a function to handle an update
function handleUpdate() {
    // 2.1 Create a suffix to select the dimention of the var e.g. px or ''
    const suffix = this.dataset.sizing || '' ;
    // console.log(this.dataset);
    // console.log(suffix);

    // 2.2 Select a variable
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// 3. Loop throught all of the inputs and add function on change
// 3.1 Make a change when I let go the mouse
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// 3.2 Make a change when I move the bar with a mouse
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));