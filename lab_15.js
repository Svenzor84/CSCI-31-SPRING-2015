/*
 * Filename:    lab_15.js
 * Description: Allows the user to click to display answers and add their own FAQ's
 * Author:      Steve Ross-Byers
 */

'use strict';

var elFAQ = document.getElementById("FAQ");
var elFAQForm = document.getElementById("FAQForm");
var elAddQuestion = document.getElementById("qAdd");
var elAddAnswer = document.getElementById("aAdd");
var elHideButton = document.getElementById("hideAll");
var elShowButton = document.getElementById("showAll");

elFAQ.addEventListener("click", function (e) {
    if (e.target !== e.currentTarget && e.target.className === "question") {
        if (e.target.nextElementSibling.style.display === "none") {
            e.target.nextElementSibling.style.display = "block";
        } else {
            e.target.nextElementSibling.style.display = "none";
        }
    }
    e.stopPropagation();
});

elFAQForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var qText = elAddQuestion.value;
    var aText = elAddAnswer.value;
    var addStars = false;
    if (document.getElementById("yes").checked) {
        addStars = true;
    }
    var newFAQ = document.createElement('section');
    newFAQ.className = "q_and_a";
    var newQ = document.createElement('p');
    newQ.className = "question";
    if (addStars === true) {
        newQ.appendChild(document.createTextNode(qText));
    } else {
        newQ.appendChild(document.createTextNode("*" + qText + "*"));
    }
    newFAQ.appendChild(newQ);
    var newA = document.createElement('p');
    newA.className = "answer";
    newA.appendChild(document.createTextNode(aText));
    newFAQ.appendChild(newA);
    elFAQ.appendChild(newFAQ);
    elFAQForm.reset();
});

elHideButton.addEventListener("click", function () {
    var elAnswers = document.getElementsByClassName("answer");
    for (var i = 0; i < elAnswers.length; i++) {
        elAnswers[i].style.display = "none";
    }
});

elShowButton.addEventListener("click", function () {
    var elAnswers = document.getElementsByClassName("answer");
    for (var i = 0; i < elAnswers.length; i++) {
        elAnswers[i].style.display = "block";
    }
});