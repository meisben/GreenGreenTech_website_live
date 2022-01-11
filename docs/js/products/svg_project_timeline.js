//variables for animation
greenRocketClass = $('.greenRocketclass2')
yellowRocketClass = $('.yellowRocketClass2');
robot1Group = $('#robotGroup');
textShadow = $('#textShadow')
progressCircle = $('#progressCircle')
robotEyeballs = $('.robotEyeball')


// ----- Create animation

// Create timeline and add begining label
var rocketRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var flyingRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var signFlashTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
var currentStageTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var robotBlinkTl = gsap.timeline({ repeat: -1, repeatDelay: 4.5 });

// Create rocket animation and add begining label (Robot1)
rocketRobot1Tl.addLabel('beginning')

rocketRobot1Tl.fromTo(greenRocketClass, { scaleY: 0.5 }, {
    duration: 0.2,
    scaleY: 0.8,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.2,
    yoyo: false,
}, "beginning");

rocketRobot1Tl.fromTo(greenRocketClass, { scaleY: 1 }, {
    duration: 0.2,
    scaleY: 0.5,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.2,
    yoyo: false,
}, "-=0.3");

rocketRobot1Tl.fromTo(yellowRocketClass, { scaleY: 0.4 }, {
    duration: 0.25,
    scaleY: 1,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.3,
    yoyo: false,
}, "beginning");

rocketRobot1Tl.fromTo(yellowRocketClass, { scaleY: 1 }, {
    duration: 0.25,
    scaleY: 0.4,
    transformOrigin: "top",
    ease: "power1.inOut",
    stagger: 0.3,
    yoyo: false,
}, "-=0.3");


// Create Flying timeline (Robot1)

flyingRobot1Tl.to(robot1Group, 5, { y: "-=10", transformOrigin: "center" }, 0)

flyingRobot1Tl.to(robot1Group, 1.9, { y: "+=10", ease: Power1.easeOut }, "+=0.2")

// Create Flashing sign timeline (Robot1)
signFlashTl.fromTo(textShadow, 1, { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
signFlashTl.fromTo(textShadow, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)

// Create pulsing current stage timeline
currentStageTl.fromTo(progressCircle, 1, { scaleX: 0.98, scaleY: 0.98, transformOrigin: "center" }, { scaleX: 1.04, scaleY: 1.04, transformOrigin: "center", repeat: -1, yoyo: true }, 0)

// Create robot blink timeline
robotBlinkTl.to(robotEyeballs, 0.1, { scaleY: 0, repeat: 3, yoyo: true, transformOrigin: "50% 50%", ease: Power4.easeInOut });

// Note by default all timelines are added to the main GSAP timeline at t=0

