var canvas = new fabric. Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric. Image. fromURL(get_image, function (Img) {
	block_image_object - Img;
	block_image_object. scaleTowidth(block_image _width); block_image_object. scaleToHeight (block_image _height);
	block_image_object.set({
		 top:block y,
		 left:block_x
	});
	canvas. add (block_image_object);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	
		if(keyPressed == '82')
	{
		block_x = 100
		new image('rrl.png');
		 console. log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new image('gr.png');
		 console. log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new image('yr.png');
		 console. log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new image('pr.png');
		 console. log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new image('br.png');
		console. log("b");
	}
	
}

