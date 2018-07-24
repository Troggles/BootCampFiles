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
    correct = document.createElement('ul');

    for(var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createAttribute('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-"){
            guess.innerHTML = "-";
            space = 1; 
        } else {
            guess.innerHTML = "-";
        }
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }

}
//mylives remaining
comments = function () {
    showLives.innherHTML = "You have " + lives + "lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
    }
    for(var i = 0; i < guesses.length; i++) {
        if(counter + space === guesses.length) {
            showLives.innerHTML = "You Win!";
        }

    }


}

//OnClick 
check = function (){
    list.onclick = function() {

        var guess = (this.innerHTML); 
        this.setAttribute("class", "active");
        this.onclick = null;
        for(var i = 0; i < word.length; i++) {
            if(word[i] === guess) {
                guesses[i].innerHTML = guess;
                    counter +=1; 
            }
        }
        
    }


}

