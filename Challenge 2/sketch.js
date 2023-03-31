let customFont;
let box;

let pengion;
let smile;
let sleeping;

let timeCycle = [];

function preload() {

  customFont = loadFont("Media/Minecraft.ttf");
  pengion = loadImage("Media/Images/pengion.gif");
  box = loadImage("Media/Images/textbox.png");

  smile = loadImage("Media/Images/smile.gif");
  sleeping = loadImage("Media/Images/sleeping.gif");

  timeCycle[0] = loadImage("Media/Images/cycle1.png");
  timeCycle[1] = loadImage("Media/Images/cycle2.png");
  timeCycle[2] = loadImage("Media/Images/cycle3.png");
  timeCycle[3] = loadImage("Media/Images/cycle4.png");
  timeCycle[4] = loadImage("Media/Images/cycle5.png");
  timeCycle[5] = loadImage("Media/Images/cycle6.png");
  timeCycle[6] = loadImage("Media/Images/cycle7.png");
  timeCycle[7] = loadImage("Media/Images/cycle8.png");
  timeCycle[8] = loadImage("Media/Images/cycle9.png");
  timeCycle[9] = loadImage("Media/Images/cycle10.png");
  timeCycle[10] = loadImage("Media/Images/cycle11.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight); //creates canvas
  textFont(customFont); //sets the font universally to the custom font
}


function draw() {
  bgCycle(); //background, function of if else that determines which background should be used

  let hr = nf(hour(), 2, 0);
  let mn = nf(minute(), 2, 0);
  let sc = nf(second(), 2, 0);

  let time = hr + ":" + mn;

  push(); //the clock itself
  textSize(200);
  textAlign(CENTER);
  text(time, width / 2, height / 2,);
  pop();

  push(); // shows the seconds in form of a bar
  translate(windowWidth / 3, windowHeight / 2);
  fill(0);
  noStroke();
  rect(0, 10, map(sc, 0, 60, 0, 500), 25, 5);
  pop();

  cute(); //function for the little "pet" left

  dialogue();

  function dialogue() { // changes according to time, shown in a textbox

    let x1 = 450;
    let x2 = 1050;
    let y1 = 450;
    let y2 = 200;

    imageMode(CORNER);
    image(box, x1 - 50, y1 - 25); //box is the variable for the image
    box.resize(x2 + 80, y2 + 50);

    translate(x1 + x2 / 2, y1 + y2 / 2); // puts x and y 0 to the center of the textbox

    textAlign(CENTER); //aligns the text in the center of the box

    if (hr > 22 || hr < 6) { //the dialogue shown in the textbox, changes with time, 11pm to 5am
      textSize(40);
      text("Zzzzzzz", 0, 0);
    }
    else if (hr > 21 && hr < 23) { // 10pm 
      textSize(40);
      text("We are closing soon! Goodnight!", 0, 0);
    }
    else if (hr > 17 && hr < 22) { // 6pm until 9pm
      textSize(40);
      text("Are you going home? Enjoy your evening!", 0, 0);
    } else if (hr > 15 && hr < 18) { // 4pm until 5pm
      textSize(40);
      text("Have a nice afternoon!", 0, 0);
    } else if (hr > 13 && hr < 16) { // 2pm until 3pm
      textSize(40);
      text("If you have any questions, ask the FrontOffice!", 0, 0);
    } else if (hr > 10 && hr < 14) { // 11am until 1pm
      textSize(40);
      text("Did you have lunch yet? The cafeteria is open!", 0, 0);
    } else { // basically the morning,  6am to 10am
      textSize(40);
      text("Good morning! I hope you have a nice day!", 0, 0);
    }

  }

  function cute() {


    if (mouseX < 500 && mouseY > 300 && hr > 5 && hr < 23) { // smile when hovering over pengion between 6am-10pm
      smile.resize(200, 200);
      image(smile, 100, 50);
    } else if (mouseX < 500 && mouseY > 300 && hr < 6) { //sleeping when hovering over pengion after midnight until 5am
      sleeping.resize(200, 200);
      image(sleeping, 100, 50);
    } else {
      //nothing
    }

    imageMode(CENTER);
    image(pengion, 200, 420);
  }
}


function bgCycle() { //changes background according to time

  let h = hour(); //need to set h here since hr is in draw 

  if (h > 22 || h < 5) { // 11pm
    background(timeCycle[10]);
  } else if (h > 19 && h < 23) { //8pm to 10pm
    background(timeCycle[9]);
  } else if (h > 18 && h < 21) {  //7pm to 8pm
    background(timeCycle[8]);
  } else if (h > 17 && h < 20) { //6pm to 7pm
    background(timeCycle[7]);
  } else if (h > 16 && h < 19) { //5pm to 6pm
    background(timeCycle[6]);
  } else if (h > 15 && h < 18) { //4pm to 5pm
    background(timeCycle[5]);
  } else if (h > 14 && h < 17) { //3pm to 4pm
    background(timeCycle[4]);
  } else if (h > 10 && h < 15) { //11am to 2pm
    background(timeCycle[3]);
  } else if (h > 7 && h < 11) { //8am to 10am
    background(timeCycle[2]);
  } else if (h > 5 && h < 8) { //6am to 7am
    background(timeCycle[1]);
  } else {
    background(timeCycle[0]);
  }
}




