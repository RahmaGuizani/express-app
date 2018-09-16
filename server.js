const express = require("express");
const app = express();
var d = new Date();
var H = d.getHours();
if (H > 8 && H < 11) {
  app.use(express.static(__dirname + "/public"));
} else {
  app.get("/contact.html", (req, res) => {
    res.send("Our office is not open now");
  });
  app.get("/home.html", (req, res) => {
    res.send("Our office is not open now");
  });
  app.get("/ourservices.html", (req, res) => {
    res.send("Our office is not open now");
  });
}
app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
