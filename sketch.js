const Engine=Matter.Engine;
const World=Matter.World
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var ground,border;
var divisions=[];
var plinkos=[];
var scores1=[];
var scores2=[];
var scores3=[];
//var particles=[];
var particle;
var score1;
var score2;
var score3;
var gameState="start";
var yourScore=0;
var chance=5;
var divisionheight=700;


function setup(){
    createCanvas(1200,1400);
    engine=Engine.create();
     score1=50*(Math.round(random(1,5)));
     score2=50*(Math.round(random(5,10)));
     score3=50*(Math.round(random(10,15)))
     scores1.push(score1);
     scores2.push(score2);
     scores3.push(score3);

    console.log(scores1)
    console.log(scores2);
    console.log(scores3);
    world=engine.world;
    ground=new Ground(580,1300,1000,30);
    ground2=new Ground(580,100,1000,30);
    ground3=new Ground(80,700,30,1400)
    ground4=new Ground(1085,700,30,1400);
    border=new Border(600,1350,1200,100);
    border2=new Border(28,825,100,1650);
    border3=new Border(1145,825,120,1650);
    border4=new Border(600,50,1200,100)
    for(var i=170;i<=1000;i=i+100){
      divisions.push(new Divisions(i,height-divisionheight/3,15,divisionheight/3));
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,210));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,270))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,330));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,390))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,450));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,510))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,570));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,630))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,690));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,750))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,810));
    }
    

  /*  ground1=new Ground(105,565,10,900)
    ground2=new Ground(893,565,10,900)
    ground4=new Ground(500,125,800,10)
    
    border=new Ground(10,500,110,1200);*/
    


}
function draw(){
    background(260)
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();
    border.display();
    border2.display();
    border3.display();
    border4.display();
    textSize(55)
    fill("red")
    textFont("Arial Black")
    text("'PLINKO'",500,60);
    textSize(35);
    text("YOUR SCORE:"+yourScore,130,180)
    textSize(30)
    text(0,120,1050);
    text(score1,200,1050);
    text(score2,300,1050);
    text(score3,400,1050)

    text(score2,500,1050);
    text(score1,600,1050);
    text(score3,700,1050);

    text(score3,800,1050);
    text(score1,900,1050);
    text(score2,1000,1050)


    for(var i=0;i<divisions.length;i++){
      divisions[i].display();
    }
    for(var k=0;k<plinkos.length;k++){
      plinkos[k].display();
    }
   /* if(frameCount% 55===0){
      particles.push(new Particle(random(width/2+50,width/2-50),200))

    }*/
   /* for(j=0;j<particles.length;j++){
      particles[j].display();
    }*/
  /*  for(k=0;k<plinkos.length;k++){
      plinkos[k].display();
    }   */
    if(particle!=null){
      particle.display();
      if(particle.body.position.y>1050&&gameState!="end"){

        if(particle.body.position.x===random(210,230)&&particle.body.position.y>1050){
          yourScore=yourScore+score1;
          particle=null;
        }else if(particle.body.position.x===300||particle.body.position.x===500||particle.body.position.x===1000){
          yourScore +=yourScore+score2;
          particle=null;
        }else if(particle.body.position.x===400||particle.body.position.x===700||particle.body.position.x===800){
         yourScore +=yourScore+score3; 
         particle=null;
        }
          
        
      }
    }
    if(chance===0){
      gameState="end";
      particle=null
    }
    
 /*   ground1.display();
    ground2.display();
    ground4.display();
    border.display();*/
   
}

function mousePressed(){
  if(gameState!="end"){
  particle=new Particle(mouseX,220);
  chance--;
  console.log(chance);
  console.log(particle.body.position.x)
  }
}