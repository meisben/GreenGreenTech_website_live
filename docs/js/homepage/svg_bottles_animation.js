//variables for animation
var rectHide = $('.rectHide');


// animation with GSAP
gsap.fromTo(rectHide, { scaleY: 1 }, {
    duration: 0.8,
    scaleY: 0,
    transformOrigin: "top right",
    ease: "power1.inOut",
    stagger: 0.075,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1
});

