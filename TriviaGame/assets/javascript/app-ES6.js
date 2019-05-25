const canvas = $('#quiz-canvas');
let countStartNumber = 25;




//on click event



$(document).on('click', '#start-over', function(e) {
  game.reset();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">25</span> Seconds</h2>');
  game.loadQuestion();
});


//Questions array 


const questions = [{
  question: "Kristy Swanson took on vampires in what 1993 movie?",
  answers: ["The Lost Boys", "Buffy The Vampire Slayer", "Blade", "Interview With A Vampire"],
  correctAnswer: "Buffy The Vampire Slayer",
  
}, {
  question: "What was the name of Coolio's FIRST hit single in 1994?",
  answers: ["Regulate", "Gangster's Paradise", "Fantastic Voyage", "Funky Cold Medina"],
  correctAnswer: "Fantastic Voyage",
  
}, {
  question: "Which NBA team set the NBA record for most wins in the 1996 regular season?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls",
  
}, {
  question: 'Which group released the hit song, "Tubthumbing"?',
  answers: ["Third Eye Blind", "The Cranberries", "The Offspring", "Chumbawamba"],
  correctAnswer: "Chumbawamba",
  
}, {
  question: 'Who played Colonel Guile in the 1994 film adaptation of Street Fighter?',
  answers: ["Arnold schwarzenegger", "Jean-Claude Van Damme", "Raul Julia", "Sylvester Stallone"],
  correctAnswer: "Jean-Claude Van Damme",
  
}, {
  question: 'Which of these characters WAS NOT in the cartoon - Aaahh!!! Real Monsters?',
  answers: ["Krum", "Tick", "Oblina", "Ickis"],
  correctAnswer: "Tick",
  
}, {
  question: "What was the name of the talking head at the temple gate in the show Legends of the Hidden Temple?",
  answers: ["Zordon", "Coatl", "Olmec", "Silver Monkey"],
  correctAnswer: "Olmec",
  
}, {
  question: "Who won the first Mortal Kombat tournament?",
  answers: ["Lord Raiden", "Sonya Blade", "Liu Kang", "Jonny Cage"],
  correctAnswer: "Liu Kang",
  
}];




let game = {
  questions:questions,
  currentQuestion:0,
  counter:countStartNumber,
  correct:0,
  incorrect:0,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.timeUp();
    }
  },
  loadQuestion: function(){
    timer = setInterval(game.countdown, 1000);
    canvas.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
    for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
      canvas.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
    }
  },
  nextQuestion: function(){
    game.counter = countStartNumber;
    $('#counter-number').html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function (){
    clearInterval(timer);
    $('#counter-number').html(game.counter);

    canvas.html('<h2>Out of Time!</h2>');
    canvas.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
    

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    canvas.html('<h2>All done, heres how you did!</h2>');
    $('#counter-number').html(game.counter);
    canvas.append('<h3>Correct Answers: ' + game.correct + '</h3>');
    canvas.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
    canvas.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
    canvas.append('<br><button id="start-over">Start Over?</button>');
  },
  clicked: function(e) {
    clearInterval(timer);

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    canvas.html('<h2>Nope!</h2>');
    canvas.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
    

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  answeredCorrectly: function(){
    clearInterval(timer);
    game.correct++;
    canvas.html('<h2>Correct!</h2>');
    

    if (game.currentQuestion === questions.length - 1){
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  reset: function(){
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};