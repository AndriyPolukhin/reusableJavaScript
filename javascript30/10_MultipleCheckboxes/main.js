// 1. Initiate a checkboxes constant in order to select all of them
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// console.log(checkboxes);


// 1.2 A changable varialbe to store the last checked box
let lastChecked;

// 2. Create a function that handle the event that occurs
function handleCheck(e) {
    // console.log(e);
    // Check if they had a shift key down
    // And check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // go ahead and do the code
        // loop over every single checkvox

        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("Starting to check them in betweeb");
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });
    }


    lastChecked = this;
}


// 3. Create a loop the adds a event listener
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));