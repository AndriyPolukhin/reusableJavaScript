window.onload = function () {
    let canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,

        centerX = width / 2,
        centerY = height / 2,
        // radius = 200,
        xRadius = 200,
        yRadius = 400,
        // angle = 0,
        xangle = 0,
        yangle = 0,
        // speed = .01,
        xspeed = 0.1,
        yspeed = 0.131,
        x,
        y;

    render();

    function render() {
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(xangle) * xRadius;
        y = centerY + Math.sin(yangle) * yRadius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        xangle += xspeed;
        yangle += yspeed;
        requestAnimationFrame(render);
    }


};