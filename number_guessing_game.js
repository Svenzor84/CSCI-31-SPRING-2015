/*
 * Filename:		number_guessing_game.js
 * Description:	Handling the User's Guess
 * Author:		Luke Sathrum / Steve Ross-Byers
 */
"use strict";
// Create a variable and store your form data (The user's guess)
// If your form input field is named 'guess' then the data is stored in the variable get.guess

var guess = get.guess;


// To get a random number between 1 and 10: Math.floor((Math.random() * 10) + 1); 
// Create a variable and store the random number

var random = Math.floor((Math.random() * 10) + 1);


// To compare user's guess with random number (your variables names may be different)
if (guess == random) {
	// Guess was correct

    document.write("<p>You Guessed Correctly!</p>");
    document.write("<p>The Computer's Number was " + random + ".</p>");

} else {
	// Guess was incorrect

    document.write("<p>You Guessed incorrectly.</p>");
    document.write("<p>The Computer's Number was " + random + ".</p>");

}