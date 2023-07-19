gsap.to("#bg",{
  scrollTrigger:{
      scrub:1 // 1 second scrubbing
  },
  scale:1.5 // 1.5 times bigger
})

gsap.to("#man",{
  scrollTrigger:{
      scrub:1
  },
  scale:0.5
})

gsap.to("#clouds_1",{
  scrollTrigger:{
      scrub:1
  },
  x:200
})

gsap.to("#clouds_2",{
  scrollTrigger:{
    scrub:1
  },
  x:-200
})

gsap.to("#text",{
  scrollTrigger:{
    scrub:2
  },
  y:500
})