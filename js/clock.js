window.onload = function () {
    window.time = 0;
    drawClock();
    setInterval(drawClock, 100);
};

function drawClock() {
    window.time++;
    var canvas = document.getElementById('clock');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2-5, 0, 2 * Math.PI, true);
    ctx.stroke();
    
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(time /10 / 30 * Math.PI);
    ctx.lineTo(canvas.width/2-3, 0);
    ctx.stroke();
    ctx.restore();
}