var arr = [];
function program(direction) {
  arr.push(direction);
  console.log(arr);
}

var bee = new Image();
bee.src = "http://recit.cshbo.qc.ca/wp-content/uploads/2015/05/beebot.png";
bee.height = 150;
bee.width = 131;
var drawingCanvas = document.getElementById("beeBot");
var ctx = drawingCanvas.getContext("2d");
var beeX = 250;
var beeY = 250;
function execute() {
  ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "left":
        context.save(); 
      	context.translate(beeX, beeY);
      	context.rotate(90 * Math.PI / 2);
      	context.drawImage(sprite, -(sprite.width/2), -(sprite.height/2));
      	context.restore(); 
        break;
      case "forward":
        MyTimer(0, 50);
        break;
      case "right":
        context.save(); 
      	context.translate(beeX, beeY);
      	context.rotate(-90 * Math.PI / 2);
      	context.drawImage(sprite, -(sprite.width/2), -(sprite.height/2));
      	context.restore(); 
        break;
      case "backwards":
        MyTimer(0, -50);
        break;
    }
    ctx.lineTo(beeX, beeY);
    
  }
  ctx.stroke();
}
function MyTimer (xChange, yChange) {
  ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  beeX += xChange;
  beeY += yChange;
  console.log(beeY);
  ctx.drawImage(bee, 0, 0, bee.width, bee.height,
                   beeX - 40, beeY - 30, drawingCanvas.width/5, drawingCanvas.height/5);
  }

setInterval(MyTimer, 40);
