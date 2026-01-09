const canvas = document.querySelector("canvas");
var hydra = new Hydra({
  canvas,
  detectAudio: false,
  width: window.innerWidth,
  height: window.innerHeight
})

imageModelURL = "https://teachablemachine.withgoogle.com/models/biTZ2ULWG/";

label=0
ml5.setBackend('webgl');
classifier = ml5.imageClassifier(imageModelURL + "model.json");

//camera for the questions
s0.initCam()
//camera for the public
s1.initCam(1)
// src(s0).out()

let lastLabel = "";
function start() {
  document.querySelector(".info").style.display = "none"
  classifier.classifyStart(s0.src, res=>{
  // console.log(res[0].label)
  if (lastLabel == res[0].label) {
    return;
  }
  switch (res[0].label) {
    case "Class A":
// How should we talk to robots/AI? 
src(s0)
.add(src(s1))
.contrast(0.2)
.add(gradient(0.7))
.luma(0.9)
.saturate(1.01)
.scale(.999)
.color(1,0,1)
.hue(.01)
.blend(o0).rotate(-0.05, -0.05)
.out()
      break;
    case "Class B":
// Do you consider robots/AI as a friend in future? 
src(s0)
.add(src(s1))
.add(voronoi(800,20))
.modulateKaleid(o1,4).diff(o0)
.blend(o0)
.out()
      break;
    case "Class C":
// What responsibilities would you allow a robot to have? 
noise(20,3)
.layer(
shape(80,0.5,0.08).luma([1,0.5])
.color(0.9,0.5,[1,0].smooth())
  .modulate(osc(99,0.1,0.9))
.repeat(2)
.kaleid(3))
  .out()
      break;
    case "Class D":
// How did you acquire your favorite toy in your childhood? 
solid(0,0,1).layer(
  osc(16,0,1.6).modulate(src(s0).sub(gradient()),1).mask(src(s0).thresh(.5).invert()))
  .modulatePixelate(noise(4).pixelate(32,32).thresh(),2000,32).out()
      break;
    case "Class E":
// How do you realise that you are awake?
src(s0)
.thresh(0.4)
.add(src(o0).scrollX(0.002),0.8)
.colorama(0.007)
.invert([0,0,0,1])
  .out(o0)
      break;
    case "Class F":
// Can you tell the time without being reminded by electronic devices? 
src(s0)
.mask(noise(1,0.3).brightness(1))
.color([0.88,1],1,[1,0.65,0.78].smooth())
.colorama(1.05)
.out(o0)
      break;
    case "Class G":
// Do you exactly follow the (traffic) signal? 
src(s0)
.add(
  osc()
  .scale([20,50].smooth())
  .color(0,1,0)
  .rotate(5,2))
.saturate(2)
.colorama(0.04)
  .out(o0)
      break;
    case "Class H":
// Are you a robot?
src(s1)
.layer(src(o0).colorama(0.01).mask(osc(10).thresh(0.5,0)))
.layer(src(o0).modulateHue(o0,10).mask(osc(20).thresh(0.5,0).rotate()))
.modulateScale(src(o0),0.005)
.out()
      break;
}
})
}
