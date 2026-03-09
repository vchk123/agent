gsap.registerPlugin(ScrollTrigger)

/* HERO ANIMATION */

gsap.from(".hero-device",{
y:100,
opacity:0,
duration:1.5
})

/* STORY DEVICE PARALLAX */

gsap.from(".story-device",{
scrollTrigger:{
trigger:".story",
start:"top center",
scrub:true
},
y:200
})

/* ZOOM PRODUCT */

gsap.to(".zoom-device",{
scrollTrigger:{
trigger:".zoom",
start:"top center",
end:"bottom center",
scrub:true
},
scale:1.8
})