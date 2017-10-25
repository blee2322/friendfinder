var surveyData = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });

  // API POST Requests
  app.post("/api/survey", function(req, res) {

    var newfriend = req.body;
  // console.log(newFriend);
    friendData.push(newfriend);
    res.json(newfriend);
  });
}
