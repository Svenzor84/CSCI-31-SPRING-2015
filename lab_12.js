/*
 * Filename:    lab_12.js
 * Description: A simple quiz that uses arrays and functions
 * Author:      Luke Sathrum / Steve Ross-Byers
 */

'use strict';

var score = 0;

function askAnswer(question) {

    var answer = prompt(questions[question][0]);

    if (answer == questions[question][1]) {
        alert('You are correct!!!');
        score++;
    } else {
        alert('You are incorrect.');
    }
    document.write('<p>' + questions[i][0] + '<br /> <strong>Your answer: </strong>' + answer + ' /<strong>Correct Answer: </strong>' + questions[i][1] + '</p>');
}

var questions = [
                 ['How many World Series titles have the San Francisco Giants won in the last 6 years (including the current season)?', '3'],
                 ['Enter zero (0) if the Los Angeles Dodgers are absolutely the worst.', '0'],
                 ['How many fingers am I holding up?', '2'],
                 ['How many numbered titles are there in the main series of the Final Fantasy franchise?', '15'],
                 ['What is the area code for Humboldt County phone numbers?', '707']
                ];

for (var i = 0; i < questions.length; i++) {
    askAnswer(i);
}
document.write('<p class="center">You scored: ' + score + '/' + questions.length + ' points</p>');