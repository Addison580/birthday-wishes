var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL("BirthdayImage.jpg", function(Img){
block_object=Img;

block_object.scaleToWidth(700);
block_object.scaleToHeight(510);
block_object.set({
    Top:0,
    left:0
});
canvas.add(block_object)
    });

	
}

function playSound(){
	x.play();
}
