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

let message1 = document.getElementById("msg-1");
let message2 = document.getElementById("msg-2");
let message3 = document.getElementById("msg-3");
let cardColor = document.getElementById("card-1");
let cardColor2 = document.getElementById("card-2");
let cardColor3 = document.getElementById("card-3");
let resetBtn = document.getElementById("reset");

first.addEventListener("click", function() {
	cardColor.style.backgroundColor="green";
	first.textContent = "Correct!";
	message1.textContent= "You got it!";
	
});	
second.addEventListener("click", function() {
	cardColor.style.backgroundColor="lightblue";
	second.textContent = "Cold!";
	message1.textContent= "Close but try again!";
});
third.addEventListener("click", function() {
	cardColor.style.backgroundColor="#e5383b";
	third.textContent = "Getting warmer!";
	message1.textContent= "You are hot as a tamale but still wrong!";
});
firstTwo.addEventListener("click", function() {
	cardColor2.style.backgroundColor="green";
	firstTwo.textContent = "Correct!";
	message2.textContent= "You got it!";
	
});	
secondTwo.addEventListener("click", function() {
	cardColor2.style.backgroundColor="lightblue";
	secondTwo.textContent = "Cold!";
	message2.textContent= "Close but try again!";
});
thirdTwo.addEventListener("click", function() {
	cardColor2.style.backgroundColor="#e5383b";
	thirdTwo.textContent = "Getting warmer!";
	message2.textContent= "You are hot as a tamale but still wrong!";
});
firstThird.addEventListener("click", function() {
	cardColor3.style.backgroundColor="green";
	firstThird.textContent = "Correct!";
	message3.textContent= "You got it!";
	
});	
secondThird.addEventListener("click", function() {
	cardColor3.style.backgroundColor="lightblue";
	secondThird.textContent = "Cold!";
	message3.textContent= "Close but try again!";
});
thirdThird.addEventListener("click", function() {
	cardColor3.style.backgroundColor="#e5383b";
	thirdThird.textContent = "Getting warmer!";
	message3.textContent= "You are hot as a tamale but still wrong!";
});

resetBtn.addEventListener("click", function() {
	message1.textContent= "";
	message2.textContent= "";
	message3.textContent= "";
	cardColor.style.backgroundColor="";
	cardColor2.style.backgroundColor="";
	cardColor3.style.backgroundColor="";
});

	
localStorage.setItem("visits", 5);
let saved = localStorage.getItem("visits");