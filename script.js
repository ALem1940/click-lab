console.log("Hello World");

let headline = document.getElementById("headline-1");
console.log(headline);

let first = document.getElementById("first-1");
let second = document.getElementById("second-1");
let third = document.getElementById("third-1");
let firstTwo = document.getElementById("first-2");
let secondTwo = document.getElementById("second-2");
let thirdTwo = document.getElementById("third-2");
let firstThird = document.getElementById("first-3");
let secondThird = document.getElementById("second-3");
let thirdThird = document.getElementById("third-3");

let pick = document.getElementById("pick-1");

first.addEventListener("click", function() {
	first.textContent = "Correct!";
	pick.textContent="You picked one";
	
});	
second.addEventListener("click", function() {
	second.textContent = "Cold!";
	pick.textContent="You picked one";
});
third.addEventListener("click", function() {
	third.textContent = "Getting warmer!";
	pick.textContent="You picked one";
});
firstTwo.addEventListener("click", function() {
	firstTwo.textContent = "Correct!";
	pick.textContent="You picked one";
	
});	
secondTwo.addEventListener("click", function() {
	secondTwo.textContent = "Cold!";
	pick.textContent="You picked one";
});
thirdTwo.addEventListener("click", function() {
	thirdTwo.textContent = "Getting warmer!";
	pick.textContent="You picked one";
});
firstThird.addEventListener("click", function() {
	firstThird.textContent = "Correct!";
	pick.textContent="You picked one";
	
});	
secondThird.addEventListener("click", function() {
	secondThird.textContent = "Cold!";
	pick.textContent="You picked one";
});
thirdThird.addEventListener("click", function() {
	thirdThird.textContent = "Getting warmer!";
	pick.textContent="You picked one";
});


pick.addEventListener("click", function() {
	pick.textContent="You picked one";
});
	
localStorage.setItem("visits", 5);
let saved = localStorage.getItem("visits");