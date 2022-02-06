nosex="";
nosey="";
  

function preload(){
    imagenose=loadImage("https://i.postimg.cc/6QS4LnhH/clownnose.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
     video.size(300,300);
    video.hide();
    model=ml5.poseNet(video,modelloaded);
    model.on('pose',getresults);
}
function draw(){
    image(video,0,0,300,300);
    // fill("red");
    // circle(nosex,nosey,15);
    image(imagenose,nosex-10,nosey-10,20,20);

    
}

function takepic() {
    save("mypic.png")
}
function modelloaded(){
    console.log("model loaded succesfuly")
}
function getresults(resultarray){
if (resultarray.length>0){
    console.log(resultarray);
    nosex=resultarray[0].pose.nose.x;
    nosey=resultarray[0].pose.nose.y;
    console.log(nosex,nosey);
}
}
