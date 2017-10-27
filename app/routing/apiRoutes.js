var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    var friendResponse = newFriend["scores[]"];
    console.log(newFriend);
    console.log(friendResponse);
    var scoresArray = [];
    var friendCount = 0;
    var best = 0;
    for(var i = 0; i < friends.length; i++) {
      var scorediff = 0;
      for(var j = 0; j < friendResponse.length; j++){
        scorediff += Math.abs(friends[i].scores[j] - parseInt(friendResponse[j]));
      }
      scoresArray.push(scorediff);
    }
    console.log(scoresArray);
    for(var i = 0; i < scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[best]) {
        best = i;
      }
    }
    console.log(best);
    var bestFriend = friends[best];
    console.log(bestFriend);
    res.json(bestFriend);
    friends.push(newFriend);
  });
};
