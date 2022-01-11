//variables for animation
bottleGroupClass = $('.bottleGroupClass')
liquidHideClass = $('.rectHideClass');
buttonClass = $('.buttonClass');
zeroWasteSign = $('#zero_waste_sign_group')


// animation with GSAP

// Create timeline
var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });

tl.fromTo(bottleGroupClass, {
    autoAlpha: 0, scale: 0.4, transformOrigin: "center"
},
    {
        scale: 0.7,
        autoAlpha: 1,
        duration: 0.8,
        transformOrigin: "center",
        ease: "power1.inOut",
        stagger: 0.2,
    });

tl.fromTo(buttonClass, { fill: "#3cb123" }, {
    fill: "#eb6b34",
    duration: 0.8,
    ease: "power1.inOut",
    stagger: 0.2,
});

tl.fromTo(liquidHideClass, { scaleY: 1 }, {
    duration: 0.8,
    scaleY: 0,
    transformOrigin: "top right",
    ease: "power1.inOut",
    stagger: 0.2,
}, "-=0.2");
