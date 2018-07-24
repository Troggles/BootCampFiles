window.onload = function () {

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var word; 
var guess;
var guesses = [];
var lives; 
var counter; 
var space; 

var showLives = document.getElementById("mylives");

// creating A-Z list
var buttons = function () {

    myButtons = document.getElementById("butons");
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) 
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check(); 
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }

}

//attempting to create guesses
result = function () {
    wordHolder = document.getElementById('hold');
    

}


