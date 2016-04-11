/*
 * Filename:    lab_13.js
 * Description: A simple shopping list
 * Author:      Steve Ross-Byers
 */

'use strict';

var list = [];

function Item(newItemName, quantity, boughtBool) {
    this.itemName = newItemName;
    this.quantity = quantity;
    this.boughtBool = boughtBool;
}

function outputList() {
    var table = document.getElementById("table"), tableContents = "", i = 0;
    for (i = 0; i < list.length; i++) {
        tableContents += "<tr><td>" + list[i].itemName + "</td><td>" +
            list[i].quantity + "</td><td>" + list[i].boughtBool + "</td></tr>";
    }
    table.innerHTML = tableContents;
}

function processForm(form) {

    var elItemName = document.getElementById("item"), itemName = elItemName.value, elQuant = document.getElementById("quantity"), quantity = elQuant.value, elBoughtBool = document.getElementById("bought"), boughtBool = elBoughtBool.checked, newestItem = new Item(itemName, quantity, boughtBool);

    list.push(newestItem);

    form.reset();

    outputList();

    return false;
}

function removeItem(shiftOrPop) {
    if (shiftOrPop === 'shift') {
        list.shift();
    }
    if (shiftOrPop === 'pop') {
        list.pop();
    }
    outputList();
}