var WIDTH = 960;
var HEIGHT = 540;

var ctx;

var canvas = document.getElementById('main');
var input = new Input(canvas);

if (canvas.getContext){
    ctx = canvas.getContext('2d');
    setInterval(draw, 33);
    ctx.globalCompositeOperation = "source-over";
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

var gameSwitch = 0;
var startmenu = new StartMenu(ctx);

function draw(){

    // Clear background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);


    switch(gameSwitch){
      case 0:
        startmenu.main();

        break;
      default:
        break;
    }




}



/*
    ここから先描画用関数
*/


var pi = Math.PI;
// 塗りつぶし円を描く
var fillCircle = function (x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, pi * 2.0, true);
    ctx.fill();
};

// 塗りつぶし角丸の矩形を描く
var fillRoundRect = function (l, t, w, h, r) {
    ctx.beginPath();
    ctx.arc(l + r, t + r, r, - pi, - 0.5 * pi, false);
    ctx.arc(l + w - r, t + r, r, - 0.5 * pi, 0, false);
    ctx.arc(l + w - r, t + h - r, r, 0, 0.5 * pi, false);
    ctx.arc(l + r, t + h - r, r, 0.5 * pi, pi, false);
    ctx.closePath();
    ctx.fill();
}
