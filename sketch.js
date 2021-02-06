var ballon;
var database, height;
function preload(){
    ballon1=loadImage("10.png")
    bg11= loadImage("20");
}

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ballon = createSprite(250,250,10,10);
    ballon.shapeColor = "red";
    ballon.addImage(
        ballon1
    )
  
   var ballonRef = database.ref('ballon/height');
   ballonRef.on("value", readHeight, showError);
  

}

function draw(){
    background("bg");
    if(keyDown(LEFT_ARROW)){
        ballon.x=ballon.x-10
    }
       
    else if(keyDown(RIGHT_ARROW)){
        ballon.y=ballon.y-10
    }
       
    else if(keyDown(UP_ARROW)){
        ballon.y=ballon.y+10
    }
      
    else if(keyDown(DOWN_ARROW)){}
        
    drawSprites();
}

function updateHeight(x,y){
    database.ref('ballon/height').set({
        'x': height.x + x,
        'y': height.y + y,
    })
}

function readHeight(data){
    height = data.val();
    ballon.x = height.x; 
    ballon.y=height.y;
}

function showError(){
    console.log("SOMETHING WENT WRONG")
}
