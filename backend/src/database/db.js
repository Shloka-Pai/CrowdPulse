// config/db.js

const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect("mongodb://127.0.0.1:27017/authDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("connected", function() {
    console.log("MongoDB connected");
  });

  mongoose.connection.on("error", function(err) {
    console.log("MongoDB error:", err);
  });
}

module.exports = connectDB;