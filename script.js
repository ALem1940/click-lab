console.log("Hello World");

let headline = document.getElementById("headline-1");
console.log(headline);

let first = document.getElementById("first-1");
let second = document.getElementById("second-2");
let third = document.getElementById("third-3");

first.addEventListener("click", function() {
	first.textContent = "Correct!";
});	
second.addEventListener("click", function() {
	second.textContent = "Cold!";
});
third.addEventListener("click", function() {
	third.textContent = "Getting warmer!";
});