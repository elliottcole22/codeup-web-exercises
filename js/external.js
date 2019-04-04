"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my Website");
var userInput = prompt("What is your favorite color?");
console.log("The user entered: + userInput");

if (userInput === "blue") {
    alert("Me Too");
}

var google = 400; var amazon = 380; var fb = 350;
var salary = (google * 6 + amazon * 4 + fb * 10);

var lm = prompt("how many days did you rent little mermaid:")
var bb = prompt("how many days did you rent Brother Bear:")
var herc = prompt("how many days did you rent Hercules?")
var pricePerDay = prompt("what was the price per day?")
var moviePrice = (lm * pricePerDay) + (herc * pricePerDay) + (bb * pricePerDay);
alert("The total cost was: $" + moviePrice);


var classSize = confirm("Is the class full?");
var classSchedule = confirm("Does this class conflict with current schedule");
var enrollmentStatus = (!classSize && !classSchedule);
alert("Student enrollment status: " + enrollmentStatus);

var numberOfItems = prompt("How many items did you buy?");
var offerExpiration = confirm("Is the offer valid?");
var membership = confirm("Are you a premium member?")

var couponStatus = (membership || Number(numberOfItems) > 2) && offerExpiration);
alert("Can customer use this offer?")