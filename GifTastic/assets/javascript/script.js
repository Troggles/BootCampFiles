// array
const topics = ['cat', 'dog', 'tiger', 'lion', 'gorilla', 'fish'];


renderButtons();


// Turns user input textbox into a button    
$(document).on('click', '#addAnimal', function(){

    // Clear the div
    $('#animalsButtons').empty();

    let animalInput = $('#animal-input').val().trim();

    topics.push(animalInput);
    
    // Clicking animal buttons displays ratings and gifs
    renderButtons();

    // User can hit "enter" instead of clicking on the button and it won't move to the next page
    return false;
});


// ANIMAL BUTTONS AT THE TOP OF THE PAGE: for loop loops through my array to create buttons with text and attributes
function renderButtons(){ 
    for (let i = 0; i < topics.length; i++){

        let b = $('<button>') 
        b.addClass('initialButtons btn-primary');
        b.attr('data-animal', topics[i]); 
        b.text(topics[i]); 
        $('#animalsButtons').append(b); 
    }
}


// Rating and Image output
$(document).on('click', '.initialButtons', function() {

    $('#animals').empty(); 

    let animal = $(this).data('animal');
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=wXXyfpeddf8mfzrm8LqVDazd8cqCb6lO&limit=10";

    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            

            console.log(queryURL);

            console.log(response);

            // in the response, the first object is an array called data, so all the queries will start with response.data (name this results to shorten the text) ButtonTriggeredAJAX
 
            let results = response.data;


            for (let j = 0; j < results.length; j++) {

                let animalDiv = $('<div>');
                animalDiv.addClass('col-md-4');
                animalDiv.addClass('height');

                let p = $('<p>').text("Rating: " + results[j].rating);

                let animalImage = $('<img>');
                animalImage.attr('src', results[j].images.fixed_height_still.url);
                animalImage.attr('data-still', results[j].images.fixed_height_still.url);
                animalImage.attr('data-animate', results[j].images.fixed_height.url);
                animalImage.attr('data-state', 'still');
                animalImage.addClass('animalImage');
                animalImage.addClass('img-responsive');


                animalDiv.append(animalImage);
                animalDiv.append(p);
                

                $('#animals').prepend(animalDiv);        
            
            }

            
        });
});


// start and stop gif
$(document).on('click', '.animalImage', function(){
    let state = $(this).attr('data-state');

    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});