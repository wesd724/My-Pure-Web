
function moveBall(x, y) {
    this.x = x;
    this.y = y;
}

moveBall.prototype = {
    setVelocityAsRandom: function (vmin, vmax) {
        var v = vmin + Math.random() * (vmax - vmin);
        var t = 2 * Math.PI * Math.random();
        this.vx = v * Math.cos(t);
        this.vy = v * Math.sin(t);
        return this;
    },
    setColorAsRandom: function (lmin, lmax) {
        var R = Math.floor(lmin + Math.random() * (lmax - lmin));
        var G = Math.floor(lmin + Math.random() * (lmax - lmin));
        var B = Math.floor(lmin + Math.random() * (lmax - lmin));
        this.color = 'rgb(' + R + ',' + G + ',' + B + ')';
        return this;
    },
    move: function () {
        this.x += this.vx;
        this.y += this.vy;
        return this;
    },
    draw: function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, 50, 50);
        return this;
    },
}
    const TimeInterval = 33;
    const BALLNUM = 10;

    var canvas = document.getElementById("moving");
    var ctx = canvas.getContext("2d");

    var ballBasicLocation = { left: canvas.width, top: canvas.height };
    var balls = [];
    for(var i = 0; i<BALLNUM; i++) {
    balls[i] = new moveBall(ballBasicLocation.left / 2, ballBasicLocation.top / 2);
    balls[i].setColorAsRandom(50, 255).setVelocityAsRandom(5, 10);
}
// setInterval(drawBall, TimeInterval);

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0,0,canvas.width,canvas.height);
    for (i = 0; i < balls.length; i++) {
        balls[i].move().draw(ctx);
    }
}
