

function setup(){
    createCanvas(600,400)
    background("lightblue")
    PosX = width/ 2;
    PosY = width/ 2;
    XSpeed = 5;
    fill("limegreen");
}

function draw(){
    background("lightblue")
    circle(PosX,PosY-100,50)
    PosX = PosX + XSpeed;
    if(PosX-50/2 <= 0 || PosX + 50/2 >= width) {
        XSpeed = XSpeed * -1;

    }
    

    circle(PosX, circle)
}

noStroke();
fill(255);
