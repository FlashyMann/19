var playerCarImg,playerCar;
var botCar1Img,botCar1;
var botCar2Img,botCar2;
var botCar3Img,botCar3;
var botCar4Img,botCar4;
var botCar5Img,botCar5;
var roadVertical,roadlVerticalImg;
var roadHorizontal,roadHorizontalImg;




function setup(){
    createCanvas(1200,600)
    playerCar=createSprite(250,300,40,40);
    playerCar.shapeColor="red"

    botCar1=createSprite(545,500,40,40)
    botCar1.shapeColor="blue"

    botCar2=createSprite(600,500,40,40)
    botCar2.shapeColor="yellow"

    botCar3=createSprite(660,500,40,40)
    botCar3.shapeColor="green"

    botCar4=createSprite(545,100,40,40)
    botCar4.shapeColor="purple"

    botCar5=createSprite(600,100,40,40)
    botCar5.shapeColor="black"

    botCar6=createSprite(660,100,40,40)
    botCar6.shapeColor="pink"

    roadHorizontal=createSprite(600,300,1200,150)

    roadVertical=createSprite(600,300,150,600)

    playerCar.depth=roadHorizontal.depth;
    playerCar.depth+=1

    playerCar.depth=roadVertical.depth;
    playerCar.depth+=1

    botCar2.depth=playerCar.depth
    botCar4.depth=playerCar.depth
    botCar5.depth=playerCar.depth




    
}

function draw(){
    background("lightblue")



   roadVertical.velocityX=-10
   botCar2.velocityX=-10
   botCar4.velocityX=-10
   botCar5.velocityX=-10


   botCar2.velocityY=-4
   botCar4.velocityY=5
   botCar5.velocityY=3

       if(frameCount%120===0){
        roadVertical=createSprite(1100,300,150,600) 
    }

    if(frameCount%120===0){
        botCar2=createSprite(1050,500,40,40) 
    }

    if(playerCar.isTouching(botCar1)){
        playerCar.destroy()
        fill("red")
        textSize(50)  
        text("Game Over",600,200)
    }
 
    if(playerCar.isTouching(botCar2)){
     playerCar.destroy()
     fill("red") 
     textSize(50) 
     text("Game Over",600,200)
    }
 
    if(playerCar.isTouching(botCar3)){
     playerCar.destroy()
     fill("red")
     textSize(50) 
     text("Game Over",600,200)
 }
 
 if(playerCar.isTouching(botCar4)){
     playerCar.destroy()
     fill("red") 
     textSize(50) 
     text("Game Over",600,200)
 }
 
 if(playerCar.isTouching(botCar5)){
     playerCar.destroy()
     fill("red") 
     textSize(50) 
     text("Game Over",600,200)
 }
 
 if(playerCar.isTouching(botCar6)){
     playerCar.destroy()
     fill("red") 
     text("Game Over",600,300)
     
 }


    
    drawSprites()

    
}

function keyPressed(){
    if(keyDown("up_arrow") ){
        playerCar.velocityY = -3 ;
      }
      if(keyDown("down_arrow") ){
        playerCar.velocityY = 3 ;
      }
}

