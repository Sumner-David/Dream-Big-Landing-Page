
//select elements to move and make them consts
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger  = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const headline2 = document.querySelector('.headline2');

const tl = gsap.timeline();

// tl.fromTo($element, $duration, $startpropertyOBJ, $endpropertiesOBJ)
tl.fromTo(hero, 1, {height:"0%"}, {height:"80%", ease: Power2.easeInOut});

tl.fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut });

tl.fromTo(slider, 1.2, { x: "100%" }, { x: "0%" }, "-=0.3")

tl.fromTo(logo, 0.5, {opacity:0, x:30}, {opacity:1,x:0}, "-=0.2");

tl.to(headline, 1, {opacity:0, y:-100 });

tl.to(headline2, 1.5, {opacity:1})















