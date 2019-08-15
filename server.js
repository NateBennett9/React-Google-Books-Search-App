const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user2:password2@ds163757.mlab.com:63757/heroku_1ft4rrh7",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Send every request to the React app
// Define any API routes before this runs
/* app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
*/

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
