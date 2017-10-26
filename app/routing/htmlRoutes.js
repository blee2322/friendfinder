var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  //Homepage
  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  //Survey Page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}