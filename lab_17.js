/*
 * Filename:    lab_17.js
 * Description: javascript code for simple memory tile game
 * Author:      Luke Sathrum / Steve Ross-Byers
 */

'use strict';
var click = 0;
var firstChoice;
var secondChoice;
var $board = $('#memory');
var imageArray = ['src="belt.jpg" alt="Brandon Belt"',
                  'src="belt.jpg" alt="Brandon Belt"',
                  'src="romo.jpg" alt="Sergio Romo"',
                  'src="romo.jpg" alt="Sergio Romo"',
                  'src="posey.jpg" alt="Buster Posey"',
                  'src="posey.jpg" alt="Buster Posey"',
                  'src="crawford.jpg" alt="Brandon Crawford"',
                  'src="crawford.jpg" alt="Brandon Crawford"',
                  'src="bumgarner.jpg" alt="Madison Bumgarner"',
                  'src="bumgarner.jpg" alt="Madison Bumgarner"',
                  'src="duffy.jpg" alt="Matt Duffy"',
                  'src="duffy.jpg" alt="Matt Duffy"',
                  'src="kontos.jpg" alt="George Kontos"',
                  'src="kontos.jpg" alt="George Kontos"',
                  'src="pence.jpg" alt="Hunter Pence"',
                  'src="pence.jpg" alt="Hunter Pence"'];
shuffle(imageArray);
var i = 0;
for (i; i < 4; i++) {
    $board.append('<section class="tile-container"><img class="back" src="sf.png" alt="Back of Piece"><img class="front" ' + imageArray[i] + '"></section>');
}
for (i; i < 8; i++) {
    $board.append('<section class="tile-container" style="left: 80px; top: -532px;"><img class="back" src="sf.png" alt="Back of Piece"><img class="front" ' + imageArray[i] + '"></section>');
}
for (i; i < 12; i++) {
    $board.append('<section class="tile-container" style="left: 210px; top: -1064px;"><img class="back" src="sf.png" alt="Back of Piece"><img class="front" ' + imageArray[i] + '"></section>');
}
for (i; i < 16; i++) {
    $board.append('<section class="tile-container" style="left: 340px; top: -1596px;"><img class="back" src="sf.png" alt="Back of Piece"><img class="front" ' + imageArray[i] + '"></section>');
}

var $back = $('.back');

// A function to shuffle an array
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

$back.on('click', function () {
    $(this).fadeOut('fast');
    click++;
    if (click == 1) {
        firstChoice = $(this).next();
    } else {
        click = 0;
        secondChoice = $(this).next();
        if (firstChoice.attr('src') == (secondChoice.attr('src'))) {

        } else {
            secondChoice.prev().delay(490).fadeIn('slow');
            firstChoice.prev().delay(500).fadeIn('slow');
        }
    }
});