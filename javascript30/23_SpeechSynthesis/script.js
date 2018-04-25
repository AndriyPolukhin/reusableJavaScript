// 1. Message Utterance
const msg = new SpeechSynthesisUtterance();
// 2. Array for voices
let voices = [];
// 3. Selectors
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

// 4. Create a function to add voices from an Browser defaults
function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(
        voice =>
          `<option value="${voice.name}">${voice.name} (${
            voice.lang
          })</option>`
      )
      .join("");
         
}

// 5. Create a function to set Voice

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

// 6. Make a function to restart the voices
function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver) {
        speechSynthesis.speak(msg);
    }

}

// 7. Function to set Options using range bars
function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

// Add an EventListener to the voice change
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));