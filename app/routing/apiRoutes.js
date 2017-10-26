var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    var friendResponse = newFriend.scores
    // console.log(newFriend);
    // console.log(friendResponses);
    for(var i = 0; i < friendResponse.length; i++) {
      var diff = 0;
      for(var j = 0; j < friendResponse.length; j++){
        diff += Math.abs(friends[i].scores[j] - friendResponse)
      }
      if(diff < totalDifference) {
        console.log(diff);

        totalDiffrence = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo; 
      }
    }
    friends.push(newFriend)
    res.json({status:"OK", matchName:matchName, matchImage:matchImage});
  });
};
