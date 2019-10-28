let mic;
var r,g,b;
var fr=15;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  rectMode(CENTER);
  frameRate(fr);

  // Create an Audio input
  mic = new p5.AudioIn();
  
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  console.log(vol);
  let h = map(vol,0,0.1,10,130);
  r=random(vol*20000);
  g=random(vol*20000);
  b=random(vol*20000);
  fill(r,g,b);
  strokeWeight(20);
  stroke(b,r,g);

  rotateX(HALF_PI * h/2000 * frameCount );
rotateY(HALF_PI * h/2000 * frameCount );
rotateZ(HALF_PI * h/2000 * frameCount );
  torus(h*5, h/5);
  box(h);

  
//   let h = map(noise(vol), 0, 1, 50,250);

}





