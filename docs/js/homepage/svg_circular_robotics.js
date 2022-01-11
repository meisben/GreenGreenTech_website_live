// Note: codepen at -> https://codepen.io/benisme/pen/vYXqwrx

//variables for animation
greenRocketClass = $('.greenRocket')
yellowRocketClass = $('.yellowRocket');
robotGroup = $('#groupRobot1');
robotFlyingGroup = $('#robotFlyingGroup');


// animation with GSAP

// Create timeline and add begining label
var rocketTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var flyingTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });


// Create rocket animation and add begining label
rocketTl.addLabel('beginning')

rocketTl.fromTo(greenRocketClass, { scaleY: 0.5 }, {
    duration: 0.2,
    scaleY: 0.8,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.2,
    yoyo: false,
}, "beginning");

rocketTl.fromTo(greenRocketClass, { scaleY: 1 }, {
    duration: 0.2,
    scaleY: 0.5,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.2,
    yoyo: false,
}, "-=0.3");

rocketTl.fromTo(yellowRocketClass, { scaleY: 0.4 }, {
    duration: 0.25,
    scaleY: 1,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.3,
    yoyo: false,
}, "beginning");

rocketTl.fromTo(yellowRocketClass, { scaleY: 1 }, {
    duration: 0.25,
    scaleY: 0.4,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.3,
    yoyo: false,
}, "-=0.3");


// Create Flying timeline

flyingTl.to(robotFlyingGroup, 5, { rotation: 360, transformOrigin: "center", repeat: -1, ease: Linear.easeNone }, 0);


// Note by default all timelines are added to the main GSAP timeline at t=0
