window.onload = function () {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 200;
    const numObjects = 30;
    const slice = Math.PI * 2 / numObjects;

    let angle = 0;
    let x;
    let y;

    for (let i = 0; i < numObjects; i += 1) {
        angle = i * slice;
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
    }


};