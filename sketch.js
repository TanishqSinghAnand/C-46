var player;
var advisor;
var canvas ;
//let score = 0 ;
var back = "black";
let gamestate = 0;
var form ;
function setup(){
        textSize(20);

    canvas = createCanvas(1200,600);
    player = createSprite(50,450,50,50);
    advisor = createSprite(1100,50,50,50);
    form = new Form();
}

function draw(){
    background("green");
    textSize(20);
    fill(rgb(255,100,150));
   // text("Score : " + score , 15,15);
    if(gamestate === 0 /*&& mousePressedOver !== sbutton */){
	    text("Hey , I am your advisor throught the game . ",advisor.x-460,advisor.y);
	    text("Please enter your name below and click submit",advisor.x-460,advisor.y+20);

    }
    form.hidef();
    form.display();

    
    //console.log(gamestate);


    console.log(gamestate);
    drawSprites();
}
