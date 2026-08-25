console.log("Hello World");

let headline = document.getElementById("headline-1");
console.log(headline);

let first = document.getElementById("first-1");
let second = document.getElementById("second-1");
let third = document.getElementById("third-1");
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



pick.addEventListener("click", function() {
	pick.textContent="You picked one";
});
	
localStorage.setItem("visits", 5);
let saved = localStorage.getItem("visits");