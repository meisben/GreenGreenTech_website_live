// Note: codepen at -> https://codepen.io/benisme/pen/oNzrKNP

//variables for animation
bottleUseGroup = $('#bottleUse');
bottleFillGroup = $('#bottleFill');
groupWheel = $('#groupWheel');
groupRobot1 = $('#groupRobot1');
robot1Eyeballs = $('.robotEyeball')
spurGear = $('#spurGear');
redButton = $('#redButton');
groupRobotArmLeft = $('#groupRobotArmLeft');
shadowRobot = $('#shadowRobot');
shadowWheel = $('#shadowWheel');

greenRocketClass = $('.greenRocketclass2')
yellowRocketClass = $('.yellowRocketClass2');

// Create wheel animation function
function spinWheel() {
    var wheelTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    wheelTl.addLabel('beginning')
    wheelTl.to(groupRobot1, 2.5, { y: "-=10", ease: Elastic.easeOut.config(1, 0.5) }, "beginning");
    wheelTl.to(shadowRobot, 2.5, { scaleX: 0.6, scaleY: 0.6, ease: Elastic.easeOut.config(1, 0.5), transformOrigin: "center" }, "beginning");
    wheelTl.addLabel('robotTop1')
    wheelTl.to(groupRobotArmLeft, 0.4, { x: "+=4" }, "robotTop1-=0.3");
    wheelTl.to(groupRobot1, 0.6, { y: "+=11", ease: Power0.easeNone }, "robotTop1");
    wheelTl.to(shadowRobot, 0.6, { scaleX: 0.9, scaleY: 0.9, ease: Power0.easeNone, transformOrigin: "center" }, "robotTop1");
    wheelTl.addLabel('buttonPress1')
    wheelTl.to(groupRobot1, 3, { y: "-=11", ease: Elastic.easeOut.config(1, 0.5) }, "buttonPress1");
    wheelTl.to(shadowRobot, 3, { scaleX: 0.6, scaleY: 0.6, ease: Elastic.easeOut.config(1, 0.5), transformOrigin: "center" }, "buttonPress1");
    wheelTl.to(groupRobotArmLeft, 0.4, { x: "-=4" }, "buttonPress1+=0.3");
    wheelTl.to(redButton, 0.4, { y: "+=1" }, "buttonPress1-=0.1");
    wheelTl.to(redButton, 0.4, { y: "-=1" }, "buttonPress1+=0.4");
    wheelTl.addLabel('startRotation', "buttonPress1+=0.3")
    wheelTl.fromTo(groupWheel, 3, { rotation: 0, transformOrigin: "center" }, { rotation: -180, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
    wheelTl.fromTo(bottleUseGroup, 3, { rotation: 0, transformOrigin: "center" }, { rotation: 180, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
    wheelTl.fromTo(bottleFillGroup, 3, { rotation: 0, transformOrigin: "center" }, { rotation: 180, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
    wheelTl.fromTo(spurGear, 3, { rotation: 0, transformOrigin: "center" }, { rotation: 360, transformOrigin: "center", ease: Linear.easeNone }, "startRotation");
    wheelTl.to(shadowGear, 0.1875, { scaleX: 0.8, transformOrigin: "center", ease: Linear.easeNone, repeat: 15, yoyo: true }, "startRotation");
    wheelTl.to(shadowWheel, 1.5, { scaleX: 0.7, transformOrigin: "center", ease: Linear.easeNone, repeat: 1, yoyo: true }, "startRotation");


    wheelTl.addLabel('midPoint', "+=1")
    wheelTl.to(groupRobotArmLeft, 0.4, { x: "+=4" }, "midPoint");
    wheelTl.to(groupRobot1, 0.6, { y: "+=11", ease: Power0.easeNone }, "midPoint");
    wheelTl.to(shadowRobot, 0.6, { scaleX: 0.9, scaleY: 0.9, ease: Power0.easeNone, transformOrigin: "center" }, "midPoint");
    wheelTl.addLabel('buttonPress2')
    wheelTl.to(groupRobot1, 3, { y: "-=11", ease: Elastic.easeOut.config(1, 0.5) }, "buttonPress2");
    wheelTl.to(shadowRobot, 3, { scaleX: 0.6, scaleY: 0.6, ease: Elastic.easeOut.config(1, 0.5), transformOrigin: "center" }, "buttonPress2");
    wheelTl.to(groupRobotArmLeft, 0.4, { x: "-=4" }, "buttonPress2+=0.3");
    wheelTl.to(redButton, 0.4, { y: "+=1" }, "buttonPress2-=0.1");
    wheelTl.to(redButton, 0.4, { y: "-=1" }, "buttonPress2+=0.4");
    wheelTl.addLabel('startRotationRetrun', "buttonPress2+=0.3")
    wheelTl.fromTo(groupWheel, 3, { rotation: -180, transformOrigin: "center" }, { rotation: -360, transformOrigin: "center", ease: Linear.easeNone }, 'startRotationRetrun');
    wheelTl.fromTo(bottleUseGroup, 3, { rotation: 180, transformOrigin: "center" }, { rotation: 360, transformOrigin: "center", ease: Linear.easeNone }, "startRotationRetrun");
    wheelTl.fromTo(bottleFillGroup, 3, { rotation: 180, transformOrigin: "center" }, { rotation: 360, transformOrigin: "center", ease: Linear.easeNone }, "startRotationRetrun");
    wheelTl.fromTo(spurGear, 3, { rotation: 360, transformOrigin: "center" }, { rotation: 720, transformOrigin: "center", ease: Linear.easeNone }, "startRotationRetrun");
    wheelTl.to(shadowWheel, 1.5, { scaleX: 0.8, transformOrigin: "center", ease: Linear.easeNone, repeat: 1, yoyo: true }, "startRotationRetrun");
    wheelTl.to(shadowGear, 0.1875, { scaleX: 0.7, transformOrigin: "center", ease: Linear.easeNone, repeat: 15, yoyo: true }, "startRotationRetrun");

    wheelTl.addLabel('robotTop3')
    wheelTl.to(groupRobot1, 2.5, { y: "+=10", ease: Elastic.easeOut.config(1, 0.5) }, "robotTop3-=2.5");
    wheelTl.to(shadowRobot, 2.5, { scaleX: 1, scaleY: 1, ease: Elastic.easeOut.config(1, 0.5), transformOrigin: "center" }, "robotTop3-=2.5");

    return wheelTl;
}

// Create robot rockets animation function
function robotRockets() {
    var rocketRobot1Tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
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

}

// Create robot rockets animation function
function robotBlink() {
    var robotBlinkTl = gsap.timeline({ repeat: -1, repeatDelay: 3.5 });

    robotBlinkTl.to(robot1Eyeballs, 0.1, { scaleY: 0, repeat: 3, yoyo: true, transformOrigin: "50% 50%", ease: Power4.easeInOut });
}

// Add everything to a master timeline

var masterTL = gsap.timeline({ repeat: -1, repeatDelay: 0 });

masterTL.add(spinWheel());
masterTL.add(robotRockets());
masterTL.add(robotBlink());

