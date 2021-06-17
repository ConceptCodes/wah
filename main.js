let players = [];
let numOfPlayers = 20;
let step;
let angle;
let r = numOfPlayers * 3;

function setup() {
    createCanvas(window.innerWidth - 4, window.innerHeight - 4);
    step = TWO_PI / 12;
    angle = 0;
}

function draw() {
    background(13, 17, 21);
    
    translate(width/2, height/2); //move 0,0 to the center of the screen
    
    //convert polar coordinates to cartesian coordinates
    let x = r * sin(angle);
    let y = r * cos(angle);
    
    for(let i = 0; i < numOfPlayers; i++) {
        players.push(new Stump(x,y).render())
    }
    
    //increase angle by step size
    angle = angle + step;
}