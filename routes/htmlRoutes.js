
// ===============================================================================
var path = require("path");




module.exports = function(app) {
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/make.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
