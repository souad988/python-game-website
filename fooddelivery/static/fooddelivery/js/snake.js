
const snake_canvas = document.getElementById('snake_canvas');
const ctx = snake_canvas.getContext('2d');
//one
const step = Math.floor(snake_canvas.width/18);
var score=0;
var d = "";
const ground= document.getElementById('ground');
ctx.drawImage(ground,0,0,snake_canvas.width,snake_canvas.height);
const foodImg =document.getElementById('food');
const snakeSound = document.getElementById('sound');

let food = {
	    x:Math.floor(Math.random()*18+1)*step ,
	    y:Math.floor(Math.random()*17+2)*step

	};

let snake = [];
 snake[0] = {
        x:Math.floor(Math.random()*18+1)*step,
	    y: Math.floor(Math.random()*17+2)*step
	};



//ctx.drawImage(food.img,food.x,food.y,step,step);

//ctx.font = "20px Georgia";
//ctx.fillText(food.img, food.x,food.y);


document.addEventListener("keydown",direction);


   function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
    }

};
//drawFood();
//keyPressed();



function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// the main functionnnnnnnnnnnnn
 draw=function(){
   ctx.drawImage(ground,0,0,snake_canvas.width,snake_canvas.height);

   //drawFood();
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "white" : "black";
        ctx.fillRect(snake[i].x,snake[i].y,step,step);

        ctx.strokeStyle = "yellow";
        ctx.strokeRect(snake[i].x,snake[i].y,step,step);
    }

    ctx.fillStyle = "white";
    ctx.fillRect(food.x,food.y,step,step);
     ctx.drawImage(foodImg,food.x,food.y,step,step);
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // which direction
    if( d == "LEFT") snakeX -= step;
    if( d == "UP") snakeY -= step;
    if( d == "RIGHT") snakeX += step;
    if( d == "DOWN") snakeY += step;


        ctx.fillStyle="black";
        ctx.fillRect(0,0,snake_canvas.width,2*step);
        ctx.fillStyle="yellow";
        ctx.font = "20px Georgia";
        //if the snake eats the food
       ctx.fillText( score, 9*step,step);

    if(snakeX  == food.x && snakeY == food.y){
        score++;
        snakeSound.play();
        food = {
	    x: Math.floor(Math.random()*18+1)*step,
	    y: Math.floor(Math.random()*17+2)*step
	    };

        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }

    // add new Head

    let newHead = {
        x : snakeX,
        y : snakeY
    };


   if(collision(newHead,snake) || snakeX < step || snakeX > 18*step || snakeY < 2*step || snakeY > 18*step ){
   	 if (collision(newHead,snake)){
   	 	ctx.fillStyle="red";
   	 	ctx.fillRect(snakeX,snakeY,4*step,2*step);
   	 	ctx.fillStyle="yellow";
   	 	ctx.fillText( "collision", snakeX,snakeY);
   	 	//clearInterval(game);
   	 }
   	 alert("GAME OVER");
     document.location.reload();

   }

   snake.unshift(newHead);
}

play_Game=function(){
setInterval(draw,150);
}