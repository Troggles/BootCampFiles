$(document).ready(function(){

    //character array
    const characters = [
        {name: 'Aragorn', img: 'assets/images/aragorn.jpg', hp: 120, ap: 20, ca: 20},
        {name: 'Legolas', img: 'assets/images/Legolas.jpg', hp: 100, ap: 25, ca: 25},
        {name: 'Uruk-Hai', img: 'assets/images/Uruk-Hai.jpg', hp: 150, ap: 15, ca: 15},
        {name: 'Sauron', img: 'assets/images/Sauron.jpg', hp: 180, ap: 10, ca: 10}
    ];
    let playerIsChosen = false;
    let enemyIsChosen = false;
    
    // Display characters 
    function start() {
        $('.display').hide();
        for (let i = 0; i < characters.length; i++) {
            let b = $('<button>');
            b.addClass('characterButton');
            b.attr('name', characters[i].name);
            b.attr('hp', characters[i].hp);
            b.attr('ap', characters[i].ap);
            b.attr('ca', characters[i].ca);
            b.append("<p>" + characters[i].name + "</p><img src='" + characters[i].img + "' class='characterImage'><br><p class='hpDisplay'>HP: " + characters[i].hp + "</p>");
            $('#allCharacters').append(b);
        }
        let p = $('<p>');
        p.append('Choose your character.');
        $('#gameText').append(p);
    }
    
    // Choose player
    $(document).on('click', '.characterButton', function() {
        if (!playerIsChosen) {
            $('#gameText').empty();
            $('.display').show();
            let player = $(this);
            player.addClass('player');
            $('#yourCharacter').append(player);
            playerIsChosen = true;
            $('#availableEnemies').append($('#allCharacters').children().addClass('possibleEnemies'));
            let p = $('<p>');
            p.append('Choose your opponent.');
            $('#gameText').append(p);
        }
    });
    
    // Choose defender
    $(document).on('click', '.possibleEnemies', function() {
        if (!enemyIsChosen) {
            $('#gameText').empty();
            let defender = $(this);
            defender.addClass('defenderButton').removeClass('possibleEnemies');
            $('#defender').append(defender);
            enemyIsChosen = true;
            let p = $('<p>');
            p.append('Attack!');
            $('#gameText').append(p);	
        }
    });
    
    // Attack button functionality
    $(document).on('click', '#attack', function() {
        let playerName = $('#yourCharacter').children().attr('name');
        let playerHP = $('#yourCharacter').children().attr('hp');	
        let playerAP = $('#yourCharacter').children().attr('ap');
        let defenderName = $('#defender').children().attr('name');
        let defenderHP = $('#defender').children().attr('hp');
        let defenderCA = $('#defender').children().attr('ca');
        // player and defender are both chosen
        if (playerIsChosen && enemyIsChosen && playerHP > 0) {
            $('#gameText').empty();	
            // player damages defender
            defenderHP -= playerAP;
            $('#defender').children().attr('hp', defenderHP);
            $('#defender .hpDisplay').text("HP: " + defenderHP);
            // defender counter attacks player
            playerHP -= defenderCA;
            $('#yourCharacter').children().attr('hp', playerHP);
            $('#yourCharacter .hpDisplay').text("HP: " + playerHP);
            let p = $('<p>');
            p.append("You attacked " + defenderName + " for " + playerAP + " damage.<br>" + defenderName + " attacked you back for " + defenderCA + " damage.");
            $('#gameText').append(p);
            // increment player's AP by player's Base AP
            
            if ($('#yourCharacter').children().length > 0 && $('#defender').children().length > 0 && playerHP > 0) {
                for (let i = 0; i < characters.length; i++) {
                    if (characters[i].name == playerName) {
                        var basePlayerAP = characters[i].ap;
                    }				 
                }
                playerAP = parseInt(playerAP) + parseInt(basePlayerAP);
                $('#yourCharacter').children().attr('ap', playerAP);
                console.log(playerAP);
            }
            // defender HP at zero 
            if (defenderHP <= 0) {
                $('#gameText').empty();
                $('#defender').empty();
                enemyIsChosen = false;
                let p = $('<p>');
                p.append('You have defeated ' + defenderName + '. Who will you challenge next?');
                $('#gameText').append(p);
            }
            // win condition
            if ($('#availableEnemies').children().length == 0 && $('#defender').children().length == 0 && playerIsChosen ) {
                $('#gameText').empty();
                $('#attack').hide();
                let p = $('<p>');
                p.append('WINNER');
                // restart button
                let br = $('<br>');
                p.append(br);
                let b = $('<button>Restart</button>');
                b.addClass('btn btn-danger raised restart');
                p.append(b);
                $('#gameText').append(p);
            }
            // lose condition
            if (playerHP <= 0) {
                $('#gameText').empty();
                $('#attack').hide();
                let p = $('<p>');
                p.append('GAME OVER!');
                // restart button
                var br = $('<br>');
                p.append(br);
                let b = $('<button>Restart</button>');
                b.addClass('btn btn-danger raised restart');
                p.append(b);
                $('#gameText').append(p);
            }
        // player is chosen, defender is not chosen, there are enemies available
        } else if (playerIsChosen && !enemyIsChosen && $('#availableEnemies').children().length > 0) {
            $('#gameText').empty();
            let p = $('<p>');
            p.append('Please choose an enemy to fight!');
            $('#gameText').append(p);
        } else if (!playerIsChosen) {
            $('#gameText').empty();
            let p = $('<p>');
            p.append('Please choose your character!');
            $('#gameText').append(p);
        }
    });
    
    // Restart button
    $(document).on('click', '.restart', function() {
        playerIsChosen = false;
        enemyIsChosen = false;
        $('#allCharacters').empty();
        $('#yourCharacter').empty();
        $('#defender').empty();
        $('#availableEnemies').empty();
        $('#gameText').empty();
        start();
    });
    
    
    start();
    });