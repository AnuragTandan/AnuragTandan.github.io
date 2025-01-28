const timeLine = gsap.timeline();

gsap.from("header",{
  opacity:0,
  y:-30,
  duration:1,
  // delay:1,
})

timeLine.from(".left-header",{
  opacity:0,
  y:-30,
  duration:1.5,
})
timeLine.from(".right-header a",{
  opacity:0,
  x:-30,
  duration:0.2,
  stagger:0.2,
})

gsap.from(".section1-containt",{
  opacity:0,
  y:-50,
  duration:2,
  delay:1,
})

gsap.from(".landing-img",{
  opacity:0,
  y:50,
  duration:1.5,
})
