var canvas = new fabric.Canvas('myCanvas')

ballY=0;
ballX=0;
holeY=400;
holeY=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeObj);
		});
	newImage();
}

function newImage()
{
	fabric.image
	.fromURL("ball.png", function(Img) {
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top:ballY,
			left:ballX
		});
		canvas.add(holeObj);
		});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}

function up()
{
	if (ballY >=450)
	{
		ballY = ballX + blockImageHeight;
		console.log("Altura da imagem do bloco = " + block_image_height);
		console.log("Quando a tecla direcional cima é pressionada, X = " + ball_x +" , Y = "+ball_y);
		canvas.remove(ballObj);
		newImage();
	}
}

function down()
{
	if (ballY <=450)
	{
		ballY = ballX + blockImageHeight;
		console.log("Altura da imagem do bloco = " + block_image_height);
		console.log("Quando a tecla direcional baixo é pressionada, X = " + ball_x +" , Y = "+ball_y);
		canvas.remove(ballObj);
		newImage();
	}
}

function left()
{
	if(ballX >5)
	{
		ballY = ballX + blockImageWidth;
		console.log("Altura da imagem do bloco = " + block_image_width);
		console.log("Quando a tecla direcional esquerda é pressionada, X = " + ball_x +" , Y = "+ball_y);
		canvas.remove(ballObj);
		newImage();
	}
}

function right()
{
	if(ballX <=1050)
	{
		ballY = ballX + blockImageWidth;
		console.log("Altura da imagem do bloco = " + block_image_width);
		console.log("Quando a tecla direcional direita é pressionada, X = " + ball_x +" , Y = "+ball_y);
		canvas.remove(ballObj);
		newImage();
	}
}

}