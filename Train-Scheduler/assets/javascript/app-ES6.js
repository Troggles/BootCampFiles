// Initialize Firebase

const config = {
    apiKey: "AIzaSyCpKVxsT9dMl54woiVT90PtHIQZzXNeay0",
    authDomain: "train-scheduler-eb10e.firebaseapp.com",
    databaseURL: "https://train-scheduler-eb10e.firebaseio.com",
    projectId: "train-scheduler-eb10e",
    storageBucket: "",
    messagingSenderId: "15307616419"
  };
  firebase.initializeApp(config);
  
  // VARIABLES
  const database = firebase.database();
  
  let trainName = "";
  let destination = "";
  let firstTrainTime = "";
  let frequency = 0;
  
  
  // FUNCTIONS + EVENTS
  $("#addTrain").on("click", function() {
  
    trainName = $('#nameInput').val().trim();
    destination = $('#destinationInput').val().trim();
    firstTrainTime = $('#firstTrainInput').val().trim();
    frequency = $('#frequencyInput').val().trim();
  
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
  
    database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrainTime: firstTrainTime,
      frequency: frequency
    });
  
      return false;
  });
  
  
  // MAIN PROCESS + INITIAL CODE
  database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
  
    // update the variable with data from the database
    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    firstTrainTime = snapshot.val().firstTrainTime;
    frequency = snapshot.val().frequency;
  
  
    // moment.js methods 
    let firstTrainMoment = moment(firstTrainTime, 'HH:mm');
    let nowMoment = moment(); // creates a moment object of current date and time 
  
    let minutesSinceFirstArrival = nowMoment.diff(firstTrainMoment, 'minutes');
    let minutesSinceLastArrival = minutesSinceFirstArrival % frequency;
    let minutesAway = frequency - minutesSinceLastArrival;
  
    let nextArrival = nowMoment.add(minutesAway, 'minutes');
    let formatNextArrival = nextArrival.format("HH:mm");
  
  
    // add table
    let tr = $('<tr>');
    let a = $('<td>');
    let b = $('<td>');
    let c = $('<td>');
    let d = $('<td>');
    let e = $('<td>');
    a.append(trainName);
    b.append(destination);
    c.append(frequency);
    d.append(formatNextArrival);
    e.append(minutesAway);
    tr.append(a).append(b).append(c).append(d).append(e);
    $('#newTrains').append(tr);
  
  
    }, function (errorObject) {
  
    // Error Message
      console.log("The read failed: " + errorObject.code);
  
  });
  
  