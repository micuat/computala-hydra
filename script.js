var hydra = new Hydra({
  detectAudio: false, width: 1280, height: 720
})

s0.initCam()
src(s0)
.scale(1,2,2)
.scrollX(.2,0.4)
.repeat(5,10,2,2)
.colorama(100)
  .out()