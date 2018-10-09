var friendsData = require("../data/friends.js")


module.exports = function(app) {

app.get("/api/friends", function(req, res){
    res.json(friendsData);
});

app.post("/api/friends", function(req, res){
    var userData = req.body;
    console.log(userData);
    var bestMatch = {
        name: "",
        photo: "",
        friendDiff: 1000
    }
    
    // console.log(req.body);
    
    var friendScore = userData.scores

    for(i = 0; i<userData.length; i++){
        console.log(friendsData[i]);
        
        var totalDiff = 0;
        for(j=0; j<userData.scores.length; j++){
            totalDiff += Math.abs(parseInt(friendScore[i]) - parseInt(userData[i].scores[j]));
    
            if(totalDiff <= bestMatch.friendDiff){
                bestMatch.name = userData[i].name,
                bestMatch.photo = userData[i].photo,
                bestMatch.friendDiff = totalDiff;
            }
        }
    }



    friendsData.push(userData);
    res.json(friendsData);
    

});
}