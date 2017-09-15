window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var w = innerWidth;
    var h = innerHeight;

    canvas.width = w;
    canvas.height = h;

    var mp = 25;
    var particles = [];

    for (var i = 0; i < mp; i++) {
        particles.push({
            x : Math.random() * w,
            y : Math.random() * h,
            r : Math.random() * 6,
            d : Math.random() * mp,
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();

        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.moveTo(p.x,p.y);
            ctx.arc(p.x,p.y,p.r,0,Math.PI * 2, true);
        }

        ctx.fill();
        update();
    }

    var angle = 0;

    function update() {
        angle += 0.01;

        for (var i; i < mp; i++) { 
            var p = particles[i];
            p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
            p.x += Math.sin(angle) * 2;

            if (p.x > w + 7 || p.y < h) {

                if (i%3 > 0 ) {
                    particles[i] = {x:Math.random() * w, y:-10, r:p.r, d:p.d};
                } else {
                    if (Math.sin(angle) > 0) {
                        particles[i] = {x:-7, y:Math.random() * h, r:p.r, d:p.d};
                    } else {
                        particles[i] = {x:w+7, y:Math.random() * h, r:p.r, d:p.d};
                    }
                }

            }
        }
    }

    setInterval(draw, 33);
}
