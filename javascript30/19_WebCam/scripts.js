// 1. Load Selectors
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// 2. Pipe the video
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            // video.src = HTMLMediaElement.srcObject(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error(`Oh No!!!`, err);
        });
}

// 3. Take a frame of the Video
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take the pixels out
        let  pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        
        // The RED EFFECT
        // pixels = redEffect(pixels);

        // The SPLIT EFFECT
        // pixels = regbSplit(pixels);

        // USE GLOBAL ALPHA
        // ctx.globalAlpha = 0.1;

        // USE GreenScreen
        pixels = greenScreen(pixels);

        // put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16)
}

// 4. Take a photo with a sound ("Snap")
function takePhoto() {
    // Play sound
    snap.currentTime = 0;
    snap.play();
    // Take the data our of the cnavas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
}


// 5. Filters Creation: redEffect()
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i = i + 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED;
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE;
    }
    return pixels;
}

// 6. Split rgba
function regbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0];
        pixels.data[i + 500] = pixels.data[i + 1];
        pixels.data[i - 550] = pixels.data[i + 2];
    }
    return pixels;
}

// 7. Set the green screen
function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

// Init the function getVideo()
getVideo();

video.addEventListener('canplay', paintToCanvas);