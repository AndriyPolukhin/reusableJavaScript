window.onload = function () {
    const canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    let centerY = height * .5,
        centerX = width * .5,
        offset = height * .4,
        // baseRadius = 100,
        // offset = 50,
        // baseAlpha = 0.5,
        // offset = 0.5,
        speed = 0.1,
        angle = 0;


    /*
        function render() {
            // let y = centerY + Math.sin(angle) * offset;
            // let radius = baseRadius + Math.sin(angle) * offset;
            let alpha = baseAlpha + Math.sin(angle) * offset;

            context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;

            requestAnimationFrame(render);
        }
        */

    function render() {
        let x = centerX + Math.sin(angle) * offset;

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, centerY, 50, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        requestAnimationFrame(render);
    }


    render();
};