/*
 * Filename:    lab_14.js
 * Description: Adds pull quotes to the article
 * Author:      Steve Ross-Byers
 */

'use strict';

var elQuotes = document.getElementsByClassName("quote");

for (var i = 0; i < elQuotes.length; i++) {
    var elBlockquote = document.createElement("blockquote");
    elBlockquote.className = "pullquote";
    elBlockquote.appendChild(document.createTextNode(elQuotes[i].textContent));
    elQuotes[i].parentNode.insertBefore(elBlockquote, elQuotes[i]);
}