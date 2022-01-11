// Note: codepen at -> https://codepen.io/benisme/pen/oNzrKNP

//variables for animation
greenRocketClass = $('.greenRocketclass2')
yellowRocketClass = $('.yellowRocketClass2');
robot1Group = $('#robot1Group');
robot1ArmGroup = $('#robot1ArmGroup')
robot2Group = $('#robot2Group');
robot1Eyeballs = $('.robotEyeball')
robot1Shadow = $('#robot1Shadow');
robot2Shadow = $('#robot2Shadow');
robot3Shadow = $('#robot3Shadow');


// animation with GSAP
// ----- Create animation

// Create timeline and add begining label
var rocketRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var flyingRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var robot1BlinkTl = gsap.timeline({ repeat: -1, repeatDelay: 4.5 });
var robot1WaveTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
var movingRobot2Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
var movingRobot3Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });



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
flyingRobot1Tl.addLabel('beginning')
flyingRobot1Tl.to(robot1Group, 5, { y: "-=10", transformOrigin: "center" }, 0)
flyingRobot1Tl.to(robot1Shadow, 5, { scaleX: 0.8, scaleY: 0.8, transformOrigin: "center" }, 0);
flyingRobot1Tl.addLabel('topRobot1')
flyingRobot1Tl.to(robot1Group, 1.9, { y: "+=10", ease: Power1.easeOut }, "topRobot1+=0.2")
flyingRobot1Tl.to(robot1Shadow, 1.9, { scaleX: 1, scaleY: 1, transformOrigin: "center" }, "topRobot1+=0.2");


// Create robot 1 blink timeline
robot1BlinkTl.to(robot1Eyeballs, 0.1, { scaleY: 0, repeat: 3, yoyo: true, transformOrigin: "50% 50%", ease: Power4.easeInOut });

// Create robot 1 wave timeline
robot1WaveTl.to(robot1ArmGroup, 0.8, { rotation: "-=10", repeat: 3, yoyo: true, transformOrigin: "bottom", ease: Power4.easeInOut });

// Create Side to side timeline (Robot2)
movingRobot2Tl.to(robot2Group, 3.5, { x: "-=10", transformOrigin: "bottom", rotation: "-=10" }, 0)
movingRobot2Tl.to(robot2Shadow, 3.5, { x: "-=15", scaleX: 1.1, transformOrigin: "center" }, 0);
movingRobot2Tl.addLabel('farLeftRobot2')
movingRobot2Tl.to(robot2Group, 1, { x: "+=10", transformOrigin: "bottom", rotation: 0, ease: Power1.easeOut }, "farLeftRobot2+=0.2")
movingRobot2Tl.to(robot2Shadow, 1, { x: "+=15", scaleX: 1, transformOrigin: "center" }, "farLeftRobot2+=0.2");


// Create Side to side timeline (Robot3)
movingRobot3Tl.to(robot3Group, 2, { x: "+=2" }, 0)
movingRobot3Tl.to(robot3Shadow, 2, { x: "+=2", transformOrigin: "center" }, 0);
movingRobot3Tl.addLabel('farLeftRobot3')
movingRobot3Tl.to(robot3Group, 1, { x: "-=2", ease: Power1.easeOut }, "farLeftRobot3+=0.2")
movingRobot3Tl.to(robot3Shadow, 1, { x: "-=2", transformOrigin: "center", ease: Power1.easeOut }, "farLeftRobot3+=0.2");


// Note by default all timelines are added to the main GSAP timeline at t=0