window.onload = function () {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
<<<<<<< HEAD
    const categories;         
    const chosenCategory;            
    const word ;              
    const guess ;             
    const guesses = [ ];      
    const lives ;             
    const counter ;           
    const space;              
  
    // Get elements
    const showLives = document.getElementById("mylives");
=======
    let categories;         
    let chosenCategory;            
    let word ;              
    let guess ;             
    let guesses = [ ];      
    let lives ;             
    let counter ;           
    let space;              
  
    // Get elements
    let showLives = document.getElementById("mylives");
>>>>>>> fc9a7ac0c377d861ce83e622d8140481a8622a52
   
    
  
  
  
    // create alphabet ul
<<<<<<< HEAD
    const buttons = function () {
=======
    let buttons = function () {
>>>>>>> fc9a7ac0c377d861ce83e622d8140481a8622a52
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
<<<<<<< HEAD
    const selectCat = function () {
=======
    let selectCat = function () {
>>>>>>> fc9a7ac0c377d861ce83e622d8140481a8622a52
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The clue is Guitar";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The clue is PC gaming";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The clue is exercise";
      }
    }
  
    // Create guesses ul - looked up 
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (let i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Guess remaining tally
     comments = function () {
      showLives.innerHTML =  + lives + " guesses remaining"
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
        
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        let guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (let i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            guesses[i].innerHTML = guess;
            counter += 1;
          } 
        }
        let j = (word.indexOf(guess));
        if (j === -1) {
          lives -= 1;
          comments();

        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
      categories = [
          ["fender", "gibson", "stratocaster", "les-paul", "telecaster", "marshall", "orange"],
          ["counter-strike", "battlegrounds", "bro-force", "steam", "computer"],
          ["squat", "benchpress", "overheadpress", "deadlift", "chinup"]
      ];
      //looked up 
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      guesses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      
    }
  
    play();
    
   
  }