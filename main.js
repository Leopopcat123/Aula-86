var canvas=new fabric.Canvas ("myCanvas");// Crie o elemento canvas:

blockImagewidht= 30;// defina a width e height do bloco imagem
blockImageheight=30;
// defina as coordenadas x e y da imagem do personagem
playerX=10;
playerY=10;
// Função para adicionar playerUpdate():
var playerObject = "";
// Função para adicionar a imagem do bloco
function  playerUpdate () 
{

    fabric.Image.fromURL("player.png", function(Img)
    {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObjectheight.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerObject);

    })

}

function newImage(getImage) 
{
    fabric.Image.fromURL(getImage, function(Img)
    
    {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(150);
        blockImageObjectheight.scaleToHeight(140);
        blockImageObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockImageObject);

    })
}